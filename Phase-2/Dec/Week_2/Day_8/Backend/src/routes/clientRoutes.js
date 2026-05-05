import { Router } from 'express';
import Client from '../models/Client.js';

const router = Router();

router.get('/post', async (req, res) => {
    try {
        const clients = await Client.find().limit(500);
        res.json(clients);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;