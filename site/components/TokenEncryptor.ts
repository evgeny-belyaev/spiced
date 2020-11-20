import * as crypto from "crypto"

const password = "931299daad4d8d9efb9c6!28afdafac82c4681ddf!ad7d4586ee4131949ca6d4&413a33a4bb4f3b94"
const saltLength = 16
const ivLen = 16
const algorithm = "aes-256-cbc"
const digest = "sha256"
const keyLength = 256 / 8
const iterations = 10000
const encoding: BufferEncoding = "hex"

export class TokenEncryptor {
    encrypt (data: string): string {
        if (!data) {
            throw Error("Invalid argument: data")
        }

        const salt = crypto.randomBytes(saltLength)
        const iv = crypto.randomBytes(ivLen)
        const key = crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest)

        const cipher = crypto.createCipheriv(algorithm, key, iv)
        cipher.write(data)
        cipher.end()

        const encrypted = cipher.read() as Uint8Array

        return Buffer.concat([salt, iv, encrypted]).toString(encoding)
    }

    decrypt (ciphertext: string): string {
        console.log(ciphertext)

        const encrypted = Buffer.from(ciphertext, encoding)
        const salt = encrypted.slice(0, saltLength)

        const iv = encrypted.slice(saltLength, saltLength + ivLen)
        const key = crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest)

        const decipher = crypto.createDecipheriv(algorithm, key, iv)
        decipher.write(encrypted.slice(saltLength + ivLen))
        decipher.end()

        const decrypted = decipher.read() as Uint8Array

        return decrypted.toString()
    }
}