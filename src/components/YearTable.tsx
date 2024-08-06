import React from 'react';
import '../css/index.css';

export interface IYearProps {
  year: string;
  amount: number;
}

export default function YearTable(props: { data: IYearProps[] }) {
  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
        {props.data.map((item) => (
          <tr>
            <td>{item.year}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
