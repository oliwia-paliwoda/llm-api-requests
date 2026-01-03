import OpenAI from "openai";
import 'dotenv/config'

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_API_KEY ?? "",
});

async function deepseekRun(prompt: string) {
    const result = await openai.chat.completions.create({
        messages: [
            {
            role: "user",
            content: prompt,
        }],
        model: "deepseek-chat",
    });

    return result.choices[0]?.message?.content
}

export default deepseekRun;