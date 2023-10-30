import React, { useState } from 'react';

function Grid() {

    //states
    //matrix variable later used to convert into grid(table element)
  const [matrix, setMatrix] = useState([[null]]);
    //selectedColor variable with the default color of red
  const [selectedColor, setSelectedColor] = useState("red");

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
      <select id="colorSelect" onChange={(e) => setSelectedColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
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
