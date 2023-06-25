const User = require();
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreign_key: 'user_id'
});

module.exports = { User, Post };