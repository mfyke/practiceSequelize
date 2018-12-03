module.exports = (sequelize, Sequelize) => {
	const Burger = sequelize.define("burgers", {
		burger_name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		devoured: {
			type: Sequelize.BOOLEAN,
			defaultValue: false
		}
	});
	return Burger;
}