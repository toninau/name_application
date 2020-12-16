export type NameAmount = {
  name: string;
  amount: number;
};

export enum Sort {
  NameAscending = 'Name_ASC',
  NameDescending = 'Name_DESC',
  AmountAscending = 'Amount_ASC',
  AmountDescending = 'Amount_DESC'
}