import { ItemFormat } from '../interfaces/ItemFormat';

export class Payment implements ItemFormat{
  constructor(
    readonly type: string,
    public recipient: string,
    public details: string,
    public amount: number,
  ){};

  format() {
    return`${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}