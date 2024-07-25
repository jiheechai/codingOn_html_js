const express = require('express');
const {main, adminPage, clientAll, waitingAll} = require('../controller/page');
const router = express.Router();

// / 
router.get('/', main);
router.get('/client', clientAll);
router.get('/admin', adminPage);
router.get('/waiting', waitingAll);
// router.get('/waitingdetail', waitingDetail);
// router.get('/clientdetail', clientDetail);

module.exports = router;