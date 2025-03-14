import { Andy } from "./hooks/andy.js";
import { HinkX } from "./hooks/hinkx.js";
import { Fuck } from "./util/fuck.js";
import { A } from "./hooks/a.js";
import { Cat } from "./hooks/cat.js";

async function main() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await Fuck.UnityPlayer();
    Andy.Kiss();
    HinkX.Kiss();
    Cat.Kiss();
    await Fuck.GameAssembly();
    A.Kiss();
}

main().catch(error => console.error(error));