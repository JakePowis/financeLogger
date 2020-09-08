export interface ItemFormat {
  type: string,
  recipient?: string,
  client?: string,
  details: string,
  amount: number,
  format(): string;
}