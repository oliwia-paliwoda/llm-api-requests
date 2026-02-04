import mistralRun from "./clients/mistral.js";
import deepseekRun from "./clients/deepseek.js";
import chatGptRun from "./clients/chatgpt.js";
import type {ContentChunk} from "@mistralai/mistralai/models/components/index.js";
import csvParse from "./csvParse.js";
import fileWrite from "./fileWrite.js";
import showMenu from "./menu.js";
import csvToJson from "./csvToJson.js";
import filter from "./filtering/filter.js";

export type LLMResponse = {
    id: number,
    prompt: string,
    chatgpt: string | null | undefined,
    deepseek: string | null | undefined,
    mistral: string | null | undefined | Array<ContentChunk>,
}

enum MenuAction {
    Run = 1,
    Update = 2,
}

async function main() {


    const prompts = await import("../src/prompts.json", { with: { type: "json" } });

    interface PromptItem {
        id: number;
        prompt: string;
    }

    const promptList: PromptItem[] = prompts.default as PromptItem[];

    try {

        const responsesArray : LLMResponse[] = [];

        for (const item of promptList) {
            const chatgpt = await chatGptRun(item.prompt);
            const mistral = await mistralRun(item.prompt);
            const deepseek = await deepseekRun(item.prompt);

            const response: LLMResponse = {
                id: item.id,
                prompt: item.prompt,
                chatgpt: chatgpt,
                mistral: mistral,
                deepseek: deepseek,
            }

            responsesArray.push(response);
        }

        console.log(responsesArray);
        fileWrite(csvParse(responsesArray),'csv','output.csv');

    } catch (err) {
        console.error("error: ", err);
    }
}

const action : number = await showMenu();
if (action === MenuAction.Run) {
    main();
}
if (action === MenuAction.Update) {
    csvToJson();
}
