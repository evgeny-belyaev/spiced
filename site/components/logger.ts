export class Logger {
    _area: string
    _applicationPrefix: string

    constructor(area: string) {
        this._area = area;
        this._applicationPrefix = "logger"
    }

    info(...message: Array<string | any>) {
        if (typeof message === 'string') {
            console.info(this._format(message))
        } else {
            console.info(this._format(''), message)
            console.info(message)
        }
    }

    warn(...message: Array<string | any>) {
        if (typeof message === 'string') {
            console.warn(this._format(message));
        } else {
            console.warn(this._format(''), message);
        }
    }

    debug(...message: Array<string | any>) {
        if (typeof message === 'string') {
            console.debug(this._format(message));
        } else {
            console.debug(this._format(''), message);
        }
    }

    assert(...message: Array<string | any>) {
        if (typeof message === 'string') {
            console.warn(this._formatAssert(message));
        } else {
            console.warn(this._formatAssert(''), message);
        }
    }

    _format(message: any): string {
        return `${this._applicationPrefix} ${new Date().toISOString()} ${this._area}: ${message}`;
    }

    _formatAssert(message: any): string {
        return `ASSERT ${this._applicationPrefix} ${new Date().toISOString()} ${this._area}: ${message}`;
    }
}

