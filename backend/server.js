const express = require('express');
const app = express();
const PORT = process.env.port || 5000;

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

const uri = process.env.BLOG_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

// Routes
app.use('/blogs', require('./routes/blogs'));

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}...`);
});