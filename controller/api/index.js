const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = requires('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/posts', postRoutes);

module.exports = router;