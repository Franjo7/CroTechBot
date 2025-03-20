import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import ImageKit from 'imagekit';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;
const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB');
    }
}

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

app.get('/api/upload', (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
});

app.listen(port, () => {
    connect();
    console.log(`Server is running on port ${port}`);
});