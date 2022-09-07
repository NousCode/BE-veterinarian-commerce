/**
 * Controladores para la funcionalidad CRUD de productos.
 * * funciones crear, actualizar, eliminar, obtener todos y un produto.
 */
import { Product } from '../models/Products.js';
export const getAllProducts = async (req, res) => {
  //! Si sucede algun error, retornar mensaje a cliente.
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAProduct = async (req, res) => {
  //! Si sucede algun error, retornar mensaje a cliente.
  try {
    //Extraer el id del parametro
    const { id } = req.params;
    // Busqueda del producto por id.
    const product = await Product.findOne({
      where: {
        id,
      },
    });

    if (!product)
      return res.status(404).json({ message: 'Product does not exists.' });
    // respuesta
    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  //! Si sucede algun error, retornar mensaje a cliente.
  try {
    // Cogiendo la información en el body.
    const { name, quantity, store, warehouse } = req.body;

    // Creando el registro en la base de datos
    const newProduct = await Product.create({
      name,
      quantity,
      store,
      warehouse,
    });
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  //! Si sucede algun error, retornar mensaje a cliente.
  try {
    //Extraer el id del parametro
    const { id } = req.params;
    // Cogiendo la información en el body.
    const { name, quantity, store, warehouse } = req.body;

    // Busqueda del producto por id.
    const product = await Product.findOne({
      where: {
        id,
      },
    });

    if (!product)
      return res.status(404).json({ message: 'Product does not exists.' });

    // Reasignando los valores del producto
    product.name = name;
    product.quantity = quantity;
    product.store = store;
    product.warehouse = warehouse;

    await product.save();
    // respuesta
    res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  //! Si sucede algun error, retornar mensaje a cliente.
  try {
    //Extraer el id del parametro
    const { id } = req.params;
    //Eliminar por el id del producto
    await Product.destroy({
      where: {
        id,
      },
    });
    // respuesta
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
