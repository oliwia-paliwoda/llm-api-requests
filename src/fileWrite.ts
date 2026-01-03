import { promises as fs } from 'fs';
import path from "path";

async function fileWrite(csv: string, dir: string, filename: string) {

    await fs.mkdir(dir, { recursive: true });

    const filePath = path.join(dir, filename);

    await fs.writeFile(filePath, csv, "utf8");

    console.log(`File written to ${filePath}`);
}

export default fileWrite;
