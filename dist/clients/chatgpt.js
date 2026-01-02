import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: "",
});
async function chatGptRun(prompt) {
    const result = await openai.chat.completions.create({
        model: "gpt-4.1",
        messages: [
            {
                role: "user",
                content: prompt
            }
        ],
    });
    console.log("chatgpt: ", result.choices);
}
export default chatGptRun;
//# sourceMappingURL=chatgpt.js.map