import { ItemFormat } from '../interfaces/ItemFormat';

export class Invoice implements ItemFormat {
  constructor(
    readonly type: string, 
    public client: string, 
    public details: string, 
    public amount: number,
  ){}

  format() {
    return `${this.client} owes you £${this.amount} for ${this.details}`;
  }
}