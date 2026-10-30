const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// 1. Direct MongoDB Atlas Connection String
// ⚠️ Apni Atlas connection string ko niche "mongodb+srv://..." ki jagah paste karein
const MONGODB_URI = "mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/my_database?retryWrites=true&w=majority";

console.log("Connecting to MongoDB Atlas...");

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.error("❌ Database Connection Error:");
    console.error(err);
  });

// 2. Import Auth Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// 3. Test Route
app.get('/', (req, res) => {
  res.send("Backend Server is Running and Connected to Atlas!");
});

// 4. Server Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
