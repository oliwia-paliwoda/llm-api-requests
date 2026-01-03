import { Mistral } from "@mistralai/mistralai";
import 'dotenv/config'

const mistral = new Mistral({
    apiKey: process.env.MISTRAL_API_KEY ?? "",
});

async function mistralRun(prompt: string) {
    const result = await mistral.chat.complete({
        model: "mistral-small-latest",
        messages: [
            {
                content: prompt,
                role: "user",
            },
        ],
    });

    return result.choices[0]?.message?.content
}

export default mistralRun;