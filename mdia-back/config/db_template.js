const dotenv = require('dotenv');
path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

module.exports = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};
