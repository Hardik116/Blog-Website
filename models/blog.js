const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Note the corrected spelling of "timestamps"

const Blog = mongoose.model('Blog', blogSchema); // Use 'Blog' as a string

module.exports = Blog;
