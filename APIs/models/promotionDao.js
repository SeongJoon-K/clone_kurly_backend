const { kurlyDataSource } = require('./data-source');

const promotions = async id => {
  const promotion = await kurlyDataSource.query(`SELECT * FROM promotions;`);
  return promotion;
};

module.exports = {
  promotions,
};
