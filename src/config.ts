export class Config {
    private static Load(A: number): number {
        let B = (A + 0x2D) & 0xFFFFFFFF;
        let C = (B << 13) & 0xFFFFFFFF;
        let D = B >>> (32 - 13);
        let E = (C | D) & 0xFFFFFFFF;
        return E ^ 0x55AA77;
    }
    static get A() { return this.Load(0x8D3802A4); }
    static get Andy() { return this.Load(0x32B8298C); }
    static get HinkX1() { return this.Load(0xB5383561); }
    static get HinkX2() { return this.Load(0xAE383561); }
    static get HinkX3() { return this.Load(0xB9383586); }
    static get HinkX4() { return this.Load(0x36B83586); }
    static get Cat1() { return this.Load(0x2538690E); }
    static get Cat2() { return this.Load(0x9F386A8F); }
    static get Str() { return this.Load(0x64386985); }
    static DH = "http://127.0.0.1:619";
    static OSS = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCk5NBxSesdFv8Z7I1eVWubzBEFF+YhNFErDlvrCCHqIo0rR68EG+3SF/Od3RVZ2CQFujzthwuPIvkNqHCoKXgrt6K/lc4f3l90kOMbFkd9THUXiHWDe4Zh5glWPuAxY1Jdn/hZOUiMtQTaANaIaHSpLvkK6s1WfQEcG5P+0JwVTwIDAQAB\n-----END PUBLIC KEY-----";
    static WEB = "<RSAKeyValue><Modulus>pOTQcUnrHRb/GeyNXlVrm8wRBRfmITRRKw5b6wgh6iKNK0evBBvt0hfznd0VWdgkBbo87YcLjyL5DahwqCl4K7eiv5XOH95fdJDjGxZHfUx1F4h1g3uGYeYJVj7gMWNSXZ/4WTlIjLUE2gDWiGh0qS75CurNVn0BHBuT/tCcFU8=</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>";
}