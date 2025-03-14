import { Config } from "../config.js";
import { Marshal } from "../util/marshal.js";
import { Fuck } from "../util/fuck.js";

export class Andy {
    static Kiss() {
        Interceptor.attach(Fuck.unityPlayer.base.add(Config.Andy), {
            onEnter: this.onEnter
        });
    }
    static onEnter(args: any[]): void {
        let targetUrl = args[1].add(20).readUtf16String(args[1].add(16).readS32())!;
        if (!targetUrl) return;
        let urlParts = targetUrl.split('/');
        if (urlParts.length <= 3) return;
        let newUrl = Config.DH;
        for (let i = 3; i < urlParts.length; i++)
            if (urlParts[i]) newUrl += "/" + urlParts[i];
        args[1] = Marshal.Str(newUrl);
    }
}