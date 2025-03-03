import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';

class Tenant extends Model {
    public id!: number;
    public code!: string;
    public status!: boolean;
    public phone_number!: string;
    public created_on!: Date;
    public updated_on!: Date;
}

Tenant.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    code: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    phone_number: {
        type: DataTypes.STRING(20),
        unique: true,
    },
    created_on: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_on: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    tableName: 'tenant',
    timestamps: false,
});

export { Tenant };