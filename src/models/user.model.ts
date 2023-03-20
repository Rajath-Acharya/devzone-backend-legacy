import sequelize from '../db/config';
import { DataTypes} from 'sequelize';

const UserModel = sequelize.define('User', {
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
},
{
	timestamps: true,
	defaultScope: {
		attributes: {
			exclude: ['password']
		},
	}
}
);

export { UserModel };