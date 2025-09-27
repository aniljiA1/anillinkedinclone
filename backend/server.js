require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');



const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));



app.use(express.json());


connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/linkedin_clone');

app.get("/", (req, res) => {
  res.send("🚀 LinkedIn Clone Backend running on localhost:5000");
});


app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));