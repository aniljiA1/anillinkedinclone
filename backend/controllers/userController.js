const User = require('../models/User');


const getProfile = async (req, res) => {
try {
const user = await User.findById(req.params.id).select('-password').populate('followers following', 'name avatar');
if (!user) return res.status(404).json({ msg: 'User not found' });
res.json(user);
} catch (err) {
console.error(err);
res.status(500).send('Server error');
}
};


const followToggle = async (req, res) => {
try {
const me = await User.findById(req.user.id);
const other = await User.findById(req.params.id);
if (!other) return res.status(404).json({ msg: 'User not found' });
const already = other.followers.includes(me._id);
if (already) {
other.followers.pull(me._id);
me.following.pull(other._id);
} else {
other.followers.push(me._id);
me.following.push(other._id);
}
await other.save();
await me.save();
res.json({ following: !already });
} catch (err) {
console.error(err);
res.status(500).send('Server error');
}
};


module.exports = { getProfile, followToggle };