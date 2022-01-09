// Central hub to pull everything together
const express = require('express');
const router = express.Router();
router.use(require('./voterRoutes'));
router.use(require('../partyRoutes'))

router.use(require('./candidateRoutes'));

module.exports = router;