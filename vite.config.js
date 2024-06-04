import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';
import testRouter from './src/routes/authRoutes.js';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

//database connection
const connectDB = async () => {
  try{ 
    await mongoose.connect(process.env.MONGO_URL), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    console.log('Database Connected');
  } catch (error) {
    console.error('Database NOT Connected', error.message);
  }
};

// export default connectDB;

// mongoose.connect(process.env.MONGO_URL)
// .then(() => console.log('Database Connected'))
// .catch((err) => console.log('Database NOT Connected', err))


connectDB();

app.use('/', testRouter)

const port = 5173;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],
//   server: {
//     port: 5173
//   },
//   connectDB
// });

export default defineConfig(() => ({
  esbuild: {
    loader: "tsx", // OR "jsx"
    include: [
      "src/**/*.jsx",
      "node_modules/**/*.jsx",
    ],
  },
}));



