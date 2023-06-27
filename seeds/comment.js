const { Comment } = require('../models');

const commentData = [
    {
      comment_body: "First!",
      user_id: 1,  
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;