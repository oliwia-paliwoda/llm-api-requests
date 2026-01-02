import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: "",
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

    console.log("deepseek: ", result.choices);
}

export default deepseekRun;