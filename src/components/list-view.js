/*
  1: sortable on column click
  2: row click
  3: horizontal click
  4: fixed column
  5: horizontal scroll
  6: fixed header
*/

import React, { useEffect, useState, useRef } from "react";
import sumBy from "lodash/sumBy";

function ListView(props) {
  const { data, columns, fetchData } = props;
  const pageNumber = useRef(1);
  const [totalWidth] = useState(sumBy(columns, "width"));
  const [targetElement, setTargetElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(handleIntersect, {
      root: document.querySelector("#table-container"),
      rootMargin: "0px",
      threshold: 0.5,
    })
  );

  function handleIntersect(IntersectionObserverEntry) {
    if (IntersectionObserverEntry.length) {
      IntersectionObserverEntry.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          makeRequest();
        }
      });
    }
  }

  useEffect(() => {
    const currentTargetElement = targetElement;
    const currentObserver = observer.current;

    if (currentTargetElement) {
      currentObserver.observe(currentTargetElement);
    }
    return () => {
      if (currentTargetElement) {
        currentObserver.unobserve(currentTargetElement);
      }
    };
  }, [targetElement]);

  function makeRequest() {
    if (!data.request.isLoading && !data.request.error) {
      const pageSize = 25;
      const page = pageNumber.current;
      fetchData({ page, pageSize });
      pageNumber.current = page + 1;
    }
  }

  const onColumnClick = (column) => {
    console.log(column);
  };

  return (
    <div className="table-container desktop-list">
      <table className="table" style={{ width: totalWidth, overflowX: "auto" }}>
        <thead className="thead-dark">
          <tr>
            {columns.map((column, i) => {
              if (column.cellComponent) {
                let CustomComponent = column.cellComponent;
                return (
                  <th key={i} style={{ width: column.width }}>
                    <CustomComponent {...column} />
                  </th>
                );
              }
              return (
                <th
                  key={i}
                  style={{ width: column.width, cursor: "pointer" }}
                  className={column.classNames + " table-head"}
                  onClick={() => onColumnClick(column)}
                >
                  <div>{column.label}</div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.data.allIds.map((id) => (
            <tr key={id}>
              {columns.map((column, i) => {
                if (column.component) {
                  let CustomComponent = column.component;
                  return (
                    <td key={i}>
                      <CustomComponent
                        {...column}
                        value={data.data.byId[id][column.valuePath]}
                      />
                    </td>
                  );
                }
                return (
                  <td key={i}>
                    <div className={column.cellClassNames}>
                      {data.data.byId[id][column.valuePath]}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
          <tr
            ref={setTargetElement}
            id="targetElement"
            style={{ height: 5 }}
          ></tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListView;
