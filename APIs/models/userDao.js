const { kurlyDataSource } = require('./data-source');

const createUser = async (loginId, hashedPassword, name) => {
  return await kurlyDataSource.query(
    `INSERT INTO users(
      login_id,
      password,
      name
    ) VALUES (?, ?, ?);
    `,
    [loginId, hashedPassword, name],
  );
};

const login = async loginId => {
  return await kurlyDataSource.query(
    `
    SELECT * 
    FROM users
		WHERE login_id=?
    `,
    [loginId],
  );
};

const profile = async userId => {
  return await kurlyDataSource.query(
    `
    SELECT 
      name 
    FROM users
    WHERE id=?
    `,
    [userId],
  );
};

module.exports = {
  createUser,
  login,
  profile,
};
