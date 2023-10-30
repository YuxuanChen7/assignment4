import React, { useState } from 'react';

function Grid() {

    //states
    //matrix variable later used to convert into grid(table element)
  const [matrix, setMatrix] = useState([[null]]);

    //functions
    //Q1
  const handleAddRow = () => {
    const currentColumns = matrix[0].length;
    const newRow = Array(currentColumns).fill(null);
    setMatrix([...matrix, newRow]);
  };

    //Q2
  const handleAddColumn = () => {
    const updatedMatrix = matrix.map(row => [...row, null]);
    setMatrix(updatedMatrix);
  };

    //returns
  return (
    <div>
      <button id="addRow" onClick={handleAddRow}>Add a Row</button>
      <button id="addColumn" onClick={handleAddColumn}>Add a Column</button>
      <table id="grid">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
