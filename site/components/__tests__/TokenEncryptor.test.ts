import { TokenEncryptor } from "../TokenEncryptor"
import crypto from "crypto"

describe("TokenEncryptor", () => {
    test("Should encrypt-decrypt", (): void => {
        const encryptor = new TokenEncryptor()

        function round(data: string) {
            return encryptor.decrypt(encryptor.encrypt(data))
        }

        const longData = crypto.randomBytes(10000).toString("hex")
        expect(round(longData)).toEqual(longData)

        const shortData = crypto.randomBytes(10).toString("hex")
        expect(round(shortData)).toEqual(shortData)

        expect(() => {
            round("")
        }).toThrowError("Invalid argument: data")
    })
})

export {}
