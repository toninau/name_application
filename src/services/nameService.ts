import nameData from '../names.json';
import { NameAmount, Sort } from '../types';

interface NamesWithTotalAmount {
  names: NameAmount[];
  totalAmount: number;
}

const { names }: { names: NameAmount[] } = nameData;

const getNames = (sortBy: Sort): NamesWithTotalAmount => {
  const namesSorted = sortHelper(sortBy, names);
  return {
    names: namesSorted,
    totalAmount: names.reduce((previousValue, currentValue) =>
      previousValue + currentValue.amount, 0)
  };
};

const sortHelper = (sortBy: Sort, names: NameAmount[]) => {
  switch (sortBy) {
    case Sort.AmountAscending:
      return names.sort((a, b) => a.amount - b.amount);
    default:
    case Sort.AmountDescending:
      return names.sort((a, b) => b.amount - a.amount);
    case Sort.NameAscending:
      return names.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    case Sort.NameDescending:
      return names.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
  }
};

const findByName = (name: string): NameAmount | undefined => {
  const nameAmount = names.find((value) => value.name.toLowerCase() === name.toLowerCase());
  return nameAmount;
};

export default {
  getNames,
  findByName
};