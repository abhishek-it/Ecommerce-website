const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');

const userRoutes = require('./routes/auth'); // ✅ IMPORTANT

const app = express();

env.config();
app.use(express.json());

app.use('/api', userRoutes); // now this works

mongoose.connect(
  "mongodb+srv://root:admin@cluster0.7wym5pe.mongodb.net/?appName=Cluster0"
).then(() => {
  console.log("Database connected");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
