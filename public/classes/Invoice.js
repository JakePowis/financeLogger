export class Invoice {
    constructor(type, client, details, amount) {
        this.type = type;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes you £${this.amount} for ${this.details}`;
    }
}
