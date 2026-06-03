// Код 404 та error middleware, підключення до бази даних та старт сервера
export const notFoundHandler = (req, res) => {
  res.status(404).json({ message: 'Route not found' });
};
