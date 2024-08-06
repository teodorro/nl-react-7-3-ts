import React from 'react';
import '../css/index.css';

export interface IMonthProps {month: string; amount: number }

export default function MonthTable(props: {data: IMonthProps[]}) {
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tr>
          <th>Month</th>
          <th>Amount</th>
        </tr>
        {props.data.map((item) => (
          <tr>
            <td>{item.month}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}


