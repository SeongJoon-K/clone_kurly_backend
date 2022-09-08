// 장바구니 basketService.js

const basketDao = require('../models/basketDao');
const SECRET_KEY="JwTsEcReTkEyOrHaShInG"
const jwt = require('jsonwebtoken');

const baskets = async (token, product_id, amount) => {
    const decoded = jwt.verify(token, SECRET_KEY)
    const createBasket = await basketDao.createBasket(
        decoded.id,
        product_id, 
        amount
    );
};

const getbasket = async(user_id) => {
    const basket = await basketDao.getbasket(user_id);
    return basket;
}

const updatebasket = async(id,amount) => {
    const basket = await basketDao.updatebasket(id,amount);
    return basket;
}

const deletebasket = async(id) => {
    const basket = await basketDao.deletebasket(id);
    return basket;
}

module.exports = {
    baskets,
    getbasket,
    updatebasket,
    deletebasket
}

