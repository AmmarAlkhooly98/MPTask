const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, config.db.params);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

fs
	.readdirSync(__dirname)
	.filter((file) => {
		return file !== 'index.js';
	})
	.forEach((file) => {
		model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
		// console.log(db[model.name]);
	});

Object.keys(db).forEach(function(modelName) {
	if ('associate' in db[modelName]) {
		db[modelName].associate(db);
	}
});

// console.log(db);
module.exports = db;
