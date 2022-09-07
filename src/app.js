/**
 * Parte del proyecto que se encarga de configurar express.
 * * Importacion de las dependencias
 */
import express from 'express';
import porductRoutes from './routes/products.routes.js';
import appRoutes from './routes/app.routes.js';
import morgan from 'morgan';

// * Inicializar la app
const app = express();

// Añaiendo el middleware
app.use(morgan("dev"));
app.use(express.json());

// * Exporta la app
export default app;

// * Anexando las rutas al proyecto
app.use(porductRoutes, appRoutes);
