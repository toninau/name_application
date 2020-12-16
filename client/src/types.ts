export type NameAmount = {
  name: string;
  amount: number;
};

export interface NamesWithTotal {
  names: NameAmount[];
  totalAmount: number;
}