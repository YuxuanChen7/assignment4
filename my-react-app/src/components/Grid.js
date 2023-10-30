import React, { useState } from 'react';

function Grid() {

  const [matrix, setMatrix] = useState([[null]]);

  const handleAddRow = () => {
    const currentColumns = matrix[0].length;
    const newRow = Array(currentColumns).fill(null);
    setMatrix([...matrix, newRow]);
  };

  const handleAddColumn = () => {
    const updatedMatrix = matrix.map(row => [...row, null]);
    setMatrix(updatedMatrix);
  };

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
