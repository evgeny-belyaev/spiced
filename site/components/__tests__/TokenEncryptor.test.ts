import { TokenEncryptor } from "../TokenEncryptor"

describe("TokenEncryptor", () => {
    test("Should encrypt", (): void => {
        const encryptor = new TokenEncryptor(10)
        const token = "++++"

        const encrypted = encryptor.encrypt(token)
        expect(encrypted).toHaveLength(token.length * 2 + 40)
    })

    test("Should decrypt", (): void => {
        const encryptor = new TokenEncryptor(10)
        const token = "++++"

        const encrypted = encryptor.encrypt(token)

        expect(encryptor.decrypt(encrypted)).toEqual(token)
    })
})

export {}