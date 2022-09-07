/**
 * Estas son las rutas para la entidad productos.
 *  * Importación de dependencias
 */
import { Router } from 'express';
import { createProduct, deleteProduct, getAllProducts, getAProduct, updateProduct } from '../controllers/products.controller.js';

// Instanciar el objeto router de express
const router = Router();

// ? Ruta para obtener productos y un producto
router.get('/products', getAllProducts);
router.get('/products/:id', getAProduct);

// ? Ruta para crear productos
router.post('/products', createProduct);

// ? Ruta para modificar un producto
router.put('/products/:id', updateProduct);

// ? Ruta para borrar un producto
router.delete('/products/:id', deleteProduct);
export default router;
