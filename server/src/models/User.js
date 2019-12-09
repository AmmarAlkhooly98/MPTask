module.exports = (sequelize, DataType) => {
	const User = sequelize.define('User', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		email: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			},
			unique: true
		},
		password: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
	});

	User.associate = (models) => {
		User.hasMany(models.Item);
	};
	return User;
};
