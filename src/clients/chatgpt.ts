import OpenAI from "openai";
import 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY ?? "",
});

async function chatGptRun (prompt: string) {
    const result = await openai.chat.completions.create({
        model: "gpt-4.1",
        messages: [
            {
                role: "user",
                content: prompt
            }
        ],
    })

    if (result.choices.length > 0) {
        console.log("chatgpt: ", result.choices[0]?.message?.content);
    }
}

export default chatGptRun;