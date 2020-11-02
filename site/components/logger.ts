export class Logger {
    _area: string
    _applicationPrefix: string

    constructor(area: string) {
        this._area = area
        this._applicationPrefix = "logger"
    }

    info(...message: Array<string | unknown>): void {
        if (typeof message === "string") {
            console.info(this._format(message))
        } else {
            console.info(this._format(""), message)
            console.info(message)
        }        
    }

    warn(...message: Array<string | unknown>): void {
        if (typeof message === "string") {
            console.warn(this._format(message))
        } else {
            console.warn(this._format(""), message)
        }
    }

    error(...message: Array<string | unknown>): void {
        if (typeof message === "string") {
            console.error(this._format(message))
        } else {
            console.error(this._format(""), message)
        }
    }


    debug(...message: Array<string | unknown>): void {
        if (typeof message === "string") {
            console.debug(this._format(message))
        } else {
            console.debug(this._format(""), message)
        }
    }

    assert(...message: Array<string | unknown>): void {
        if (typeof message === "string") {
            console.warn(this._formatAssert(message))
        } else {
            console.warn(this._formatAssert(""), message)
        }
    }

    _format(message: unknown): string {
        return `${this._applicationPrefix} ${new Date().toISOString()} ${this._area}: ${<string>message}`
    }

    _formatAssert(message: unknown): string {
        return `ASSERT ${this._applicationPrefix} ${new Date().toISOString()} ${this._area}: ${<string>message}`
    }
}

