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

  const handleDeleteRow = () => {
    if (matrix.length > 1){
      const updatedMatrix = matrix.slice(0, -1);
      setMatrix(updatedMatrix);
    }
  };

  const handleDeleteColumn = () => {
    if (matrix[0].length > 1) {
      const updatedMatrix = matrix.map(row => row.slice(0, -1));
      setMatrix(updatedMatrix);
    }
  };
    //q5
    const handleChangeColor = (event) => {
      setSelectedColor(event.target.value);
    };
    //q6
    const handleCellClick = (rowIndex, cellIndex) => {

      const newMatrix = matrix.map(row => [...row]);
      newMatrix[rowIndex][cellIndex] = selectedColor;
      setMatrix(newMatrix);
    };
    //Q7
    const handleColorAllCells = () => {
        const coloredMatrix = matrix.map(row => row.map(() => selectedColor));
        setMatrix(coloredMatrix);
    };

    //Q8
    const handleColorUncoloredCells = () => {
        const coloredMatrix = matrix.map(row => row.map(cell => cell || selectedColor));
        setMatrix(coloredMatrix);
    };

    //Q9
    const handleRemoveColorFromAllCells = () => {
        const clearedMatrix = matrix.map(row => row.map(() => null));
        setMatrix(clearedMatrix);
  };

    //returns
  return (
    <div>
      <button id="addRow" onClick={handleAddRow}>Add a Row</button>
      <button id="addColumn" onClick={handleAddColumn}>Add a Column</button>
      <button id="deleteRow" onClick={handleDeleteRow}>Delete a Row</button>
      <button id="deleteColumn" onClick={handleDeleteColumn}>Delete a Column</button>
      <button id="colorAll" onClick={handleCellClick}>Color One Cell</button>
      <button onClick={handleColorAllCells}>Color All Cells</button>
      <button onClick={handleColorUncoloredCells}>Color Uncolored Cells</button>
      <button onClick={handleRemoveColorFromAllCells}>Remove the Color from All Cells</button>
      <select id="colorSelect" value={selectedColor} onChange={handleChangeColor}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <table id="grid">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={{ backgroundColor: cell }}
                onClick={() => handleCellClick(rowIndex, cellIndex)}>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
