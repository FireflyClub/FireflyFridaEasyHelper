import { Config } from "../config.js";
import { Fuck } from "./fuck.js";

export class Marshal {
    static Str(content: string): NativePointer {
        let func = new NativeFunction(Fuck.unityPlayer.base.add(Config.Str), "pointer", ["pointer"]);
        let ptr = Memory.allocUtf8String(content);
        return func(ptr);
    }
}