import dns from 'dns';
dns.setServers(['1.1.1.1','8.8.8.8']);

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB.js';
import { errors } from "celebrate";
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';
import authRoutes from './routes/authRoutes.js';
import notesRoutes from './routes/notesRoutes.js';
//eslint-disable-next-line no-unused-vars
import { Query } from 'mongoose';
import cookieParser from "cookie-parser";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(
  express.json({
    type: ['application/json', 'application/vnd.api+json'],
    limit: '100kb',
  }),
);
app.use(cors());
app.use(cookieParser());
app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

app.use(notesRoutes);

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

app.use(authRoutes);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
