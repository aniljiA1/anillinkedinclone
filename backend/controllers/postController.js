const Post = require('../models/Post');


const createPost = async (req, res) => {
try {
const post = new Post({ author: req.user.id, content: req.body.content });
await post.save();
await post.populate('author', 'name avatar');
res.json(post);
} catch (err) {
console.error(err);
res.status(500).send('Server error');
}
};


const getFeed = async (req, res) => {
try {
// Simple feed: all posts sorted by date (extend: only following + self)
const posts = await Post.find().sort({ createdAt: -1 }).populate('author', 'name avatar');
res.json(posts);
} catch (err) {
console.error(err);
res.status(500).send('Server error');
}
};


const likeToggle = async (req, res) => {
try {
const post = await Post.findById(req.params.id);
if (!post) return res.status(404).json({ msg: 'Post not found' });
const already = post.likes.includes(req.user.id);
if (already) post.likes.pull(req.user.id);
else post.likes.push(req.user.id);
await post.save();
res.json({ liked: !already, likesCount: post.likes.length });
} catch (err) {
console.error(err);
res.status(500).send('Server error');
}
};


module.exports = { createPost, getFeed, likeToggle };