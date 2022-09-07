/**
 * Esta parte se encarga de correr la aplicación.
 * * Importación de la app de express y elementos de sequelize
 */
import app from './app.js';
import { sequelize } from './database/database.js';

async function main() {
  // ? Prueba la conexion con la base de datos
  try {
    /*
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    */

    // ~ Sincronizando las tablas y elementos de la base de datos
    await sequelize.sync({force: false});
    
    // * Server escuchando en el puerto 3000
    app.listen(3000);
    console.log('Server is listening on port', 3000);

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// * Ejecuta la función main.
main();
