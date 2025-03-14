import { Config } from "../config.js";
import { Fuck } from "../util/fuck.js";

export class HinkX {
    static Kiss() {
        Interceptor.replace(Fuck.unityPlayer.base.add(Config.HinkX1), new NativeCallback(
            () => undefined, 'void', ['float']
        ));
        Interceptor.replace(Fuck.unityPlayer.base.add(Config.HinkX2), new NativeCallback(
            () => undefined, 'void', ['float']
        ));
        Interceptor.replace(Fuck.unityPlayer.base.add(Config.HinkX3), new NativeCallback(
            () => undefined, 'void', ['float', 'int']
        ));
        Interceptor.replace(Fuck.unityPlayer.base.add(Config.HinkX4), new NativeCallback(
            () => 1, 'bool', ['float', 'float', 'float', 'int', 'int']
        ));
    }
}