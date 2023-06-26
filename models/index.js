const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');



User.hasMany(Post, {
    foreignKey: 'user_id',
    
});

Post.belongsTo(User, {
    foreign_key: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foerignkKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foerignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foereignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foerignKey: 'post_id'
});


module.exports = { User, Post, Comment }