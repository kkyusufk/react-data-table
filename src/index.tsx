import React, { useEffect, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/dataTable.css'
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
  useLayoutEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <DataTable
      columns={Columns} 
      rows={data}
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
