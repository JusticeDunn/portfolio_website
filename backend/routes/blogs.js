const router = require('express').Router();
let blogModel = require('../models/blog.model');

router.get('/', (req, res) => {

    // return blogs from database
    blogModel.find()
        .then(document => {
            console.log(document)
            res.status(200).json(document);
        })
        .catch(err => {
            res.status(404).send(`Did not find the blog. Error: ${err}`);
        })
});

module.exports = router;