const express = require('express');
const {addList, administerView, administerUpdate, waitingSearchAll, waitingSearchDetail, clientSearcAll, clientSearchOne } = require('../controller/client');
const router = express.Router();

// /api/client
router.post('/add', addList);
router.post('/admin', administerView);
router.post('/update', administerUpdate);
router.get('/waitingall', waitingSearchAll);
router.get('/waitingdetail/:id', waitingSearchDetail);
router.get('/clientall', clientSearcAll);
router.get('/clientdetail/:id', clientSearchOne);

module.exports = router;
