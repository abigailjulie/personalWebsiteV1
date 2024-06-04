import express from 'express';
import cors from 'cors';
import { test, loginUser } from '../controllers/authController.js';
import App from '../App.js';
const router = express.Router();

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:8000'
    })
);

router.get('/', App);
router.post('/home', );
router.post('/', loginUser);

export default router;