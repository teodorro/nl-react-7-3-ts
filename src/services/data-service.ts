import moment from 'moment';
import { IMonthProps } from '../components/MonthTable';
import { IYearProps } from '../components/YearTable';
import { ISortProps } from '../components/SortTable';
const API_URL = import.meta.env.VITE_AGGREGATION_JSON;

export async function getData() {
  try {
    const url = API_URL == null ? "" : API_URL.toString();
    const response = await fetch(url);
    const txt = await response.text();
    const data = await JSON.parse(txt);
    return data.list;
  }
  catch (error) {
    console.log(error);
    return error;
  }
}

export function getMonthData(data: { date: string, amount: number }[]) {
  const converted = data.map((item: { date: string, amount: number }) => {
    return <IMonthProps>{
        month: item.date.split('-')[1],
        amount: item.amount
      };
  });
  return converted;
}

export function getYearData(data: { date: string, amount: number }[]) {
  const converted = data.map((item: { date: string, amount: number }) => {
    return <IYearProps>{
      year: item.date.split('-')[0],
      amount: item.amount
    };
  });
  return converted;
}

export function getSortedData(data: { date: string, amount: number }[]) {
  const sorted = data.sort((x, y) => {
    return moment(x.date).diff(moment(y.date));
  });
  const converted = sorted.map((item: { date: string, amount: number }) => {
    return <ISortProps>{
      date: item.date,
      amount: item.amount
    };
  });
  return converted;
}