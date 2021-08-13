export class Contact {
    constructor(
        private name: string,
        private number: string
    ){}

    getName(): string {
        return this.name;
    }

    getNumber(): string {
        return this.number;
    }
}
