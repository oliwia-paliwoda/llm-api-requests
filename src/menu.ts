
import readline from "readline";

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

function showMenu(): Promise<number> {
    console.log("MENU");
    console.log("1.Run prompts")
    console.log("2.Update prompts");

    return new Promise((resolve) => {
        rl.question("Choose option - ", (answer: string) => {
            switch (answer.trim()) {
                case "1":
                    resolve(1);
                    break;
                case "2":
                    resolve(2);
                    break;

                default:
                    console.log("Invalid option");
            }
        });
    });
}

export default showMenu;
