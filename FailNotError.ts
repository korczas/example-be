// dumb example just for presentation purposes
export class FailNotError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'FailNotError';
    }
}
