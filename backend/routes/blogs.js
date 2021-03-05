const router = require('express').Router();
let blogModel = require('../models/blog.model');

router.get('/', (req, res) => {

    // return blogs from database
    blogModel.find()
        .then(document => {
            res.status(200).json(document);
        })
        .catch(err => {
            res.status(404).send(`Did not find the blog. Error: ${err}`);
        })
});

router.post('/createNewBlog', (req, res) => {
    const { title, contents } = req.body;

    let newBlogDocument = new blogModel({
        title,
        contents,
    });

    newBlogDocument.save().then(document => {
        console.log(document);

        res.status(200).send(`Successfully created a new blog post!`);
    }).catch(err => {
        res.status(400).send(`Failed to create blog post. Error: ${err}`);
    });
});

router.patch('/', (req, res) => {
    const { newTitle, newContents } = req.body;

    let updatedBlogDocument = {};

    // Check for existence of properties to update
    if (newTitle) updatedBlogDocument.title = newTitle;
    if (newContents) updatedBlogDocument.contents = newContents;

    // Update document
    blogModel.findOneAndUpdate({ _id })
        .then(document => {
            res.status(200).json(document);
        })
        .catch(err => {
            res.status(404).send(`Did not find user to update. Error: ${err}`);
        });
});

router.delete('/', (req, res) => {
    const { _id } = req.body;

    blogModel.findOneAndDelete({ _id })
        .then(document => {
            res.status(200).json(document);
        })
        .catch(err => {
            res.status(404).send(`Did not find blog post to delete. Error: ${err}`);
        });
});

module.exports = router;