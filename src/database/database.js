/**
 * Configuración de la conexión con sequelize
 * * Importar la dependencia de sequelize
 */
import Sequelize from 'sequelize';

// Objeto de conexión con sequelize de forma URI
export const sequelize = new Sequelize('postgres://root:password12345@localhost:5432/comercioDB')
