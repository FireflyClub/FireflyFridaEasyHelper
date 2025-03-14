import { Config } from "../config.js";
import { Fuck } from "../util/fuck.js";

export class A {
    static Kiss() {
        Interceptor.replace(Fuck.gameAssembly.base.add(Config.A), new NativeCallback(
            (a1: NativePointer, src: NativePointer, size: UInt64) => {
                this.onReplace(a1, src, size);
            }, 'void', ['pointer', 'pointer', 'size_t']
        ));
    }
    static onReplace(a1: NativePointer, src: NativePointer, size: UInt64): void {
        let input = src.readAnsiString();
        if (!input) {
            this.Func(a1, src, size);
            return;
        }
        if (input.includes("KEY")) {
            this.Func(a1, Memory.allocAnsiString(Config.OSS), uint64(Config.OSS.length));
            return;
        }
        if (!input.startsWith('https://')) {
            this.Func(a1, src, size);
            return;
        }
        let urlParts = input.split('/');
        if (urlParts.length <= 3) {
            this.Func(a1, src, size);
            return;
        }
        let rebuildUrl = Config.DH;
        for (let i = 3; i < urlParts.length; i++)
            if (urlParts[i]) rebuildUrl += "/" + urlParts[i];
        this.Func(a1, Memory.allocAnsiString(rebuildUrl), uint64(rebuildUrl.length));
    }
    static Func(a1: NativePointer, src: NativePointer, size: UInt64): void {
        let func = new NativeFunction(Fuck.gameAssembly.base.add(Config.A), 'void', ['pointer', 'pointer', 'size_t']);
        func(a1, src, size);
    }
}