export class BaseError {
    constructor(message?: string) {
        Error.apply(this, [message])
    }
}