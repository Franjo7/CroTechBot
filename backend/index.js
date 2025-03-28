import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import ImageKit from 'imagekit';
import mongoose from 'mongoose';
import Chat from './models/chat.js';
import UserChats from './models/userChats.js';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

const port = process.env.PORT || 3000;
const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());

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

/*
    app.get('/api/test', ClerkExpressRequireAuth(), (req, res) => {
        const userId = req.auth.userId;
        console.log(userId);
        res.send('Success');
    })
*/

app.post('/api/chats', ClerkExpressRequireAuth(), async (req, res) => {
    const userId = req.auth.userId;
    const { text } = req.body;

    try {
        // Create a new chat
        const newChat = new Chat({
            userId: userId,
            history: [{ role: 'user', parts: [{ text }] }],
        });

        const savedChat = await newChat.save();

        // Check if the chat already exists
        const userChats = await UserChats.find({ userId: userId });

        // If it doesn't exist, create a new chat, and add the chat to the array
        if (!userChats.length) {
            const newUserChats = new UserChats({
                userId: userId,
                chats: [
                    {
                        _id: savedChat._id,
                        title: text.substring(0, 40),
                    },
                ],
            });
            await newUserChats.save();
        } else {
            // If it exists, push the chat to the existing array
            await UserChats.updateOne(
                { userId: userId },
                {
                    $push: {
                        chats: {
                            _id: savedChat._id,
                            title: text.substring(0, 40),
                        },
                    },
                }
            );
            res.status(201).send(newChat._id);
        }     
    } catch (error) {
        console.error(error);
        res.status(500).send('Error while creating a new chat.');
    }
});

app.get('/api/userchats', ClerkExpressRequireAuth(), async (req, res) => {
    
    const userId = req.auth.userId;

    try {
        const userChats = await UserChats.find({ userId: userId });
        res.status(200).send(userChats[0].chats);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error while fetching user chats.');
    }
});

app.get('/api/chats/:id', ClerkExpressRequireAuth(), async (req, res) => {
    
    const userId = req.auth.userId;

    try {
        const chat = await Chat.findOne({ _id: req.params.id, userId: userId });
        res.status(200).send(chat);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error while fetching a single chat.');
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(401).send('Unauthorized');
});    

app.listen(port, () => {
    connect();
    console.log(`Server is running on port ${port}`);
});