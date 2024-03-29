import { Logger } from "../components/logger"
import { givenRandomString } from "../components/testUtils"
import * as os from "os"

export function isServer(): boolean {
    return typeof window === "undefined" || typeof jest !== "undefined"
}

export function isDevelopment(): boolean {
    return os.platform() === "darwin" || os.platform() === "win32"
}

export function isTest(): boolean {
    return process.env["NODE_ENV"] === "test"
}

export function isIntegration(): boolean {
    return process.env["SPICED_INTEGRATION"] === "integration"
}

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

export function paginate<T>(arr: T[], size: number) {
    return arr.reduce((acc:T[][], val: T, i) => {
        const idx = Math.floor(i / size)
        const page = acc[idx] || (acc[idx] = [])

        page.push(val)

        return acc
    }, [])
}

async function gracefulSleep(n: number) {
    if (isTest()) {
        return
    } else {
        const ts = Math.ceil(n ** 2)
        await sleep(1000 * ts)
    }
}

export function shuffleArray<T>(arr: T[]): T[] {
    if (isTest()) {
        return arr
    }

    let i = arr.length, j, temp

    if (i == 0) return arr

    while (--i) {
        j = Math.floor(Math.random() * (i + 1))
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    return arr
}

export function encodeCommunityIndex(n: number): string {
    const chars = "uDJq-CPLlr4t3KIV2RYUdZ1Nh79XQzoxW_MwS6ceH5j0OykBiTasb8fvpFEgGnAm"
    const len = chars.length
    const result = []

    n += len + 1

    do {
        result.push(chars.charAt(n % len))
    } while (0 !== (n = Math.floor(n / len)))

    return givenRandomString(2) +
        result.join("") +
        givenRandomString(2)
}


export async function callGracefully<T>(
    what: () => Promise<T>,
    isSuccess: (result: T) => boolean,
    sleep: (n: number) => Promise<void> = gracefulSleep
): Promise<T | null> {
    let n = 0

    const log = new Logger("callGracefully")

    do {
        if (n !== 0) {
            log.debug(`Retrying the call with n=${n}`)
            await sleep(n)
        }

        let result

        try {
            result = await what()
        } catch (x) {
            log.error(x)
            return null
        }

        if (isSuccess(result)) {
            return result
        }
    } while (n++ < 10)

    return null
}
