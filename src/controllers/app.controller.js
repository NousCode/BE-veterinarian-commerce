/**
 * Controlador para función mensaje de bienvenida.
 * * Mostrando mensaje en la ruta root.
 */
export const getWelcome = (req, res) => {
  res.send('Welcome to API Veterinarian: Made with 💚 by Juan Camilo ');
};
