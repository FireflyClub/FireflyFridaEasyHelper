import { Config, Config as Data } from "../config.js";
import { Fuck } from "../util/fuck.js";
import { Marshal } from "../util/marshal.js";

export class Cat {
    static Kiss() {
        Interceptor.attach(Fuck.unityPlayer.base.add(Config.Cat1), {
            onEnter: this.onEnter
        });
        Interceptor.attach(Fuck.unityPlayer.base.add(Config.Cat2), {
            onEnter: this.onEnter
        });
    }
    static onEnter(args: any[]): void {
        args[0] = Marshal.Str(Data.WEB);
    }
}