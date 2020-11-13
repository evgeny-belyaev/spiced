import * as crypto from "crypto"

export class TokenEncryptor {
    private readonly padding: number;

    constructor(padding = 10) {
        this.padding = padding
    }

    encrypt(token: string): string {
        const leftPadding = crypto.randomBytes(this.padding).toString("hex")
        const rightPadding = crypto.randomBytes(this.padding).toString("hex")
        const tokenHex = Buffer.from(token).toString("base64")

        return leftPadding + tokenHex + rightPadding
    }

    decrypt(token: string): string {
        const substring =  token.substr(this.padding * 2, token.length * 2 - this.padding * 4)
        return Buffer.from(substring, "base64").toString("ascii")
    }
}