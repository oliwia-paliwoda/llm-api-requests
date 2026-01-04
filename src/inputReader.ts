import fs from 'fs';
import fileWrite from "./fileWrite.js";

function csvJSON () {

    try {
        const filePath : string = "./csv/prompts.csv";
        const writePath: string = "./csv/prompts1.json";
        const csv: string = fs.readFileSync(filePath, "utf-8");
        const lines : string[] = csv.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
            throw new Error("Plik CSV jest pusty");
        }

        const result : Record<string, string>[] = [];
        const headers = lines[0]!.trim().split(';').filter(h => h.trim() !== '');


        for (let i = 1; i < lines.length; i++) {
            const obj : Record<string, string> = {};
            const currentline: string[] = lines[i]!.trim().split(";");

            for (let j = 0; j < headers.length; j++) {
                const header = headers[j];
                if (!header) throw new Error(`No header in column ${j}`);
                obj[header] = currentline[j] ?? "";
            }
            result.push(obj);
        }
        console.log(JSON.stringify(result));
        fs.writeFileSync(writePath, JSON.stringify(result,null,2), "utf-8");
    } catch (err) {
        console.error(err);
    }

}

export default csvJSON;

