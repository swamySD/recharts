import React from "react";
import { tabledata } from "../../Data";
import './SprintTable.css'



const Tablelist = () => {
  return (
    <div className="sprint-table">
      <table className="table">
        <thead className="table-heading">
          <tr>
            {Object.keys(tabledata[0]).map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody">
          {tabledata.map((cell) => (
            <tr>
              {Object.keys(cell).map((item) => (
                <td key={cell}>{cell[item]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablelist;