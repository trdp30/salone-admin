/*
  1: sorable on column click
  2: row click
  3: horizontal click
  4: fixed column
  5: horizontal scroll
  6: fixed header
*/

import React, { useEffect, useState } from 'react';
import sumBy from 'lodash/sumBy';

function ListView(props) {
  const { data, columns, fetchData } = props
  const [ totalWidth ] = useState(sumBy(columns, 'width'))

  useEffect(() => {
    if(!data.request.isLoading && !data.request.error) {
      fetchData()
    }
  }, [])
  
  return (
    <div className="desktop-list">
      <table className="table" style={{width: totalWidth, overflowX: 'auto'}}>
        <thead className="thead-dark">
          <tr>
            {columns.map((column, i) => {
              if(column.cellComponent) {
                let CustomComponent = column.cellComponent
                return <th key={i} style={{width: column.width}}><CustomComponent {...column}/></th>
              }
              return (
                <th key={i} style={{width: column.width}} className={column.classNames + " table-head"}><div>{column.label}</div></th>
              )}
            )}
          </tr>
        </thead>
        <tbody>
          {data.data.allIds.map((id) => (
            <tr key={id}>
              {columns.map((column, i) => {
                if(column.component) {
                  let CustomComponent = column.component
                  return <td key={i}><CustomComponent {...column} value={data.data.byId[id][column.valuePath]} /></td>
                }
                return (
                  <td key={i}><div className={column.cellClassNames}>{data.data.byId[id][column.valuePath]}</div></td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListView;