const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); 

const MONGODB_URI="mongodb+srv://khushibharuwala_db_user:az3DnbDwWF96Thw4@cluster0.unhiop8.mongodb.net/SkillConnect?retryWrites=true&w=majority"
;

console.log("Connecting to MongoDB Atlas...");

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log(" MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.error("Database Connection Error:", err);
  });

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send("Backend Server is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
