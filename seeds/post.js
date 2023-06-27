const { Post } = require('../models');

const postData = [
    {
        title: "Lorem Ipsum",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;