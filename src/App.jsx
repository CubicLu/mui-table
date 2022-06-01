import { useEffect, useState } from "react";

import { CollapsibleTable, createData } from "./components/Table";

import { useFetch } from "./hooks/useFetch";

import "./App.css";

function App() {
  const [rows, setRows] = useState([]);
  const { response, fetchData, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  useEffect(() => {
    !rows.length && fetchData();
    response && setRows(response);
  }, [response, rows]);

  return (
    <div className="App">
      <CollapsibleTable rows={rows} />
    </div>
  );
}

export default App;
