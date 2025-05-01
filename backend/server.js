import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

dotenv.config();
const app = express();

app.use(cors())
app.use(express.json())

const mongoUri = process.env.MONGO_URI

await mongoose.connect(mongoUri)

// id -> bigURL
const urlSchema = new mongoose.Schema({
    originalURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true,
        unique: true
    }
})

const URL = mongoose.model('URL', urlSchema)

// shortener API

app.post("/api/shorten", async (req, res) => {
    const { originalURL } = req.body
    if (!originalURL) {
        return res.status(400).json({ error: 'URL is required' });
    }
    const shortURL = nanoid(5)

    try{
        const newURL = new URL({originalURL, shortURL});
        await newURL.save();

        res.json({shortURL});
    } catch (error) {
        res.status(500).json({error: 'Falha ao encurtar a URL'});
    }

});

// redirect API

app.get("/:shortURL", async (req, res) => {
    const { shortURL } = req.params;

    try {
        const url = await URL.findOne({ shortURL });

        if (url) {
            return res.redirect(url.originalURL);
        } else {
            return res.status(404).json({ error: 'URL not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Falha ao redirecionar' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));