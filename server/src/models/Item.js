module.exports = (sequelize, DataType) => {
	const Item = sequelize.define('Item', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Item_Name: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		Item_Price: {
			type: DataType.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		Item_Description: {
			type: DataType.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
	});

	Item.associate = (models) => {
		Item.belongsTo(models.User);
	};
	return Item;
};
