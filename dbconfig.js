const { DataSource } = require("typeorm");

console.log(process.env.TYPEORM_CONNECTION);

const myDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});

myDataSource
  .initialize()
  .then(() => {
    console.log("DB INTITIALIZED 완료");
  })
  .catch((err) => {
    console.error("Error occurred during Data Source initialization", err);
    myDataSource.destroy();
  });

module.exports = {
  myDataSource,
};
