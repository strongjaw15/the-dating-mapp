// const router = require('express').Router();
// const apiRoutes = require('./api');
// const path = require('path')

// router.use('/api', apiRoutes);

// router.use('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// module.exports = router;

const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path')

router.use('/api', apiRoutes);

// Define a catch-all route that will handle all requests
router.get('*', function (req, res) {
  res.setHeader('Content-Disposition', 'inline');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = router;
