import React from 'react';
import '../css/index.css';

export interface ISortProps {
  date: string;
  amount: number;
}

export default function SortTable(props: { data: ISortProps[] }) {
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {props.data.map((item) => (
          <tr>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
