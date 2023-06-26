const router = require('express').Router();


const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = requires('./commentRoutes');


router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', CommentRoutes);

module.exports = router;