import React, { useMemo, useState, useEffect } from "react";

import Table from "./Table";
import "./styles.css";

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Header 1",
        columns: [
          {
            Header: "Subheader 1",
            accessor: "show.sub1"
          },
          {
            Header: "Subheader 2",
            accessor: "show.sub2"
          }
        ]
      },
      {
        Header: "Header 2",
        columns: [
          {
            Header: "Subheader 3",
            accessor: "show.sub3"
          },
          {
            Header: "Subheader 4",
            accessor: "show.sub4"
          }
        ]
      }
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        score: 17,
        show: {
          sub1: 444,
          sub2: 555
        }
      },
      {
        score: 18,
        show: {
          sub3: 777,
          sub4: 999
        }
      }
    ],
    []
  );

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
