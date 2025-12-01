import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.OPENAI_API_KEY) {
    console.error("OpenAI API key not found. Please check your .env file.");
}

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
