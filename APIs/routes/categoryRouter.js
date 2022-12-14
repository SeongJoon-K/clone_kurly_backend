const express = require('express');
const categoryCotroller = require('../controllers/categoryController');

const router = express.Router();

router.get('/', categoryCotroller.getcategory);
router.get('/:id', categoryCotroller.detailcategory);

module.exports = {
    router
}