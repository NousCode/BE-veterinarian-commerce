/**
 * Modelando la entidad productos para la persistencia de datos
 *  * Importando las dependencias para el modelado
 */
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

//* Creando una tabla
export const Product = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  store: {
    type: DataTypes.STRING(30)
  },
  warehouse: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});
