import express from 'express';

export const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello, world!' });
});
