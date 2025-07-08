import { Sequelize, DataTypes } from "sequelize";
import configuration from './config/config.js';
import initUserModel from './models/user.js';
import initUserPasswordModel from './models/userpassword.js';

const env = process.env.NODE_ENV || 'production';
const config = configuration[env];

const sequelize = new Sequelize(config);

const db = {};

db.User = initUserModel(sequelize, DataTypes);
db.UserPassword = initUserPasswordModel(sequelize, DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;