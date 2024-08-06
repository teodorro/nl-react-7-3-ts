import { useState, useEffect } from 'react';
import './App.css';
import './css/index.css';
import {
  getData,
  getMonthData,
  getYearData,
  getSortedData,
} from './services/data-service';
import MonthTable from './components/MonthTable';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';

function App() {
  useEffect(() => {
    async function fetchData() {
      const d = await getData();
      setData(d);
    }
    fetchData();
  }, []);
  const [data, setData] = useState([]);
  const monthData = getMonthData(data);
  const yearData = getYearData(data);
  const sortedData = getSortedData(data);

  return (
    <>
      <div className="my-tables">
        <MonthTable data={monthData}></MonthTable>
        <YearTable data={yearData}></YearTable>
        <SortTable data={sortedData}></SortTable>
      </div>
    </>
  );
}

export default App;
