/**
 * Modelando la entidad productos para la persistencia de datos
 *  * Importando las dependencias para el modelado
 */
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

//* Creando una tabla
export const Products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncremeent: true,
  },
  name: {
    type: DataTypes.STRING
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  store: {
    type: DataTypes.CHAR
  },
  warehouse: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});
