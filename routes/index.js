const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.use('/api', apiRoutes);

module.exports = router;