const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user_register')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Atlas connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});
app.use(bodyParser.json());

// Add routes for user registration, email verification, etc.
app.use('/api/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
