import { BaseError } from "../baseError"

export class EntityAlreadyExists extends BaseError {
    constructor (public message: string) {
        super()
    }
}