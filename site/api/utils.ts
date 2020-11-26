import { Logger } from "../components/logger"


export function isServer (): boolean {
    return typeof window === "undefined" || typeof jest !== "undefined"
}

export function isTest (): boolean {
    return process.env["NODE_ENV"] === "test"
}

export function isIntegration (): boolean {
    return process.env["SPICED_INTEGRATION"] === "integration"
}

export function sleep (ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

async function gracefulSleep (n: number) {
    if (isTest()) {
        return
    } else {
        const ts = Math.ceil(n ** 2)
        await sleep(1000 * ts)
    }
}

export function shuffleArray<T> (arr: T[]): T[] {
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

export async function callGracefully<T> (
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
