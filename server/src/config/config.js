const path = require('path');
module.exports = {
	port: process.env.port || 8082,
	db: {
		database: process.env.DB_NAME || 'MP-Task',
		user: process.env.USER || '',
		password: process.env.DB_PASS || '',
		params: {
			dialect: process.env.DIALECT || 'sqlite',
			storage: path.resolve(__dirname, '../../MP-Task.sqlite'),
			define: {
				underscore: true
			},
			host: process.env.HOST || 'localhost',
			logging: process.env.LOG || false
		},
		operatorsAliases: false
	}
};
