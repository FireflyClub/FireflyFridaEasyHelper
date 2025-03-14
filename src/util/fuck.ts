export class Fuck {
    static gameAssembly: Module;
    static unityPlayer: Module;
    private static Load(data: number[]): string {
        return String.fromCharCode(...data.map(b => b ^ 0x55));
    }
    static async UnityPlayer() {
        void (async () => {
            while (true) {
                let dll = [19, 60, 39, 48, 51, 57, 44, 19, 39, 60, 49, 52, 16, 52, 38, 44, 29, 48, 57, 37, 48, 39, 95, 18, 60, 33, 61, 32, 55, 111, 117, 61, 33, 33, 37, 38, 111, 122, 122, 50, 60, 33, 61, 32, 55, 123, 54, 58, 56, 122, 57, 48, 33, 61, 48, 39, 60, 35, 48, 39, 103, 101, 101, 98, 95, 17, 60, 38, 54, 58, 39, 49, 111, 117, 61, 33, 33, 37, 38, 111, 122, 122, 49, 60, 38, 54, 58, 39, 49, 123, 50, 50, 122, 57, 48, 33, 61, 48, 39, 60, 35, 48, 39];
                console.log(this.Load(dll));
                await new Promise(r => setTimeout(r, 5000));
            }
        })();
        let dll = [18, 52, 56, 48, 20, 38, 38, 48, 56, 55, 57, 44, 123, 49, 57, 57];
        let unityPlayer = Process.findModuleByName(this.Load(dll));
        while (unityPlayer == null) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            unityPlayer = Process.findModuleByName(this.Load(dll));
        }
        this.unityPlayer = unityPlayer;
    }

    static async GameAssembly() {
        let dll = [20, 54, 54, 58, 32, 59, 33, 5, 57, 52, 33, 27, 52, 33, 60, 35, 48, 123, 49, 57, 57];
        let gameAssembly = Process.findModuleByName(this.Load(dll));
        while (gameAssembly == null) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            gameAssembly = Process.findModuleByName(this.Load(dll));
        }
        this.gameAssembly = gameAssembly;
    }
}