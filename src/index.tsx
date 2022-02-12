import React, { useEffect, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/dataTable.css';
import './css/loader.css'
import reportWebVitals from './reportWebVitals';
import { DataTable } from './components/DataTable';

const Columns = [
  {
    id: 'title',
    label: 'Title',
    numeric: false,
    width: '200px'
  },
  {
    id: 'body',
    label: 'Body',
    numeric: false,
  }
]

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => { 
        setData(data)
        setIsLoading(false);
      }), 1500)
  }, [])

  // for testing only
  const onRowClick = (rowData: object, rowIndex: number) => {
    console.log(rowData, rowIndex)
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <DataTable
      columns={Columns} 
      rows={data}
      loading={isLoading}
      onRowClick={onRowClick}
    />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
