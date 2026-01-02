import mistralRun from "./clients/mistral.js";
import deepseekRun from "./clients/deepseek.js";
import chatGptRun from "./clients/chatgpt.js";
import "../src/prompts.json" with { type: "json" };
import fs from "fs";
import deepseek from "./clients/deepseek.js";
async function main() {
    const prompts = await import("../src/prompts.json", { with: { type: "json" } });
    const promptList = prompts.default;
    try {
        for (const item of promptList) {
            await chatGptRun(item.prompt);
            await mistralRun(item.prompt);
            await deepseekRun(item.prompt);
        }
    }
    catch (err) {
        console.error("error: ", err);
    }
}
main();
//# sourceMappingURL=index.js.map