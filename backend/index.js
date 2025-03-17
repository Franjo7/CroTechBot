import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import ImageKit from 'imagekit';

const port = process.env.PORT || 3000;
const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

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
    console.log(`Server is running on port ${port}`);
});