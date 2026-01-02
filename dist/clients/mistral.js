import { Mistral } from "@mistralai/mistralai";
const mistral = new Mistral({
    apiKey: "",
});
async function mistralRun(prompt) {
    const result = await mistral.chat.complete({
        model: "mistral-small-latest",
        messages: [
            {
                content: prompt,
                role: "user",
            },
        ],
    });
    console.log("mistral: ", result.choices);
}
export default mistralRun;
//# sourceMappingURL=mistral.js.map