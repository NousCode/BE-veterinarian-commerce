/**
 * Hola mundo de la app en el backend.
 *  * Importando dependencias
 */
import { Router } from 'express';
import { getWelcome } from '../controllers/app.controller.js';
// Instanciar el objeto router de express
const route = Router();
// ~ Ruta bienvenida al programa
route.get('/', getWelcome);
export default route;
