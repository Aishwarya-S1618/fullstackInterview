import React, {useState, useEffect, useRef} from "react"

const Square=({ value, onSquareClick })=> {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const[square, setSquare] = useState(Array(400).fill(null));
  const [clickCount, setClickCount] = useState(0);
  function handleClick(e) {
    if (clickCount < 1) {
      setClickCount(clickCount + 1);
      // Perform your desired action here
      console.log('Button clicked!');
      const start= e.target.value
    }
    if (clickCount < 2) {
      setClickCount(clickCount + 1);
      // Perform your desired action here
      console.log('Button clicked!');
      const end= e.target.value
      
    }
  }
  return (
    <>
      {Array.from({ length: 20 }).map((_, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {Array.from({ length: 20 }).map((_, colIndex) => (
            <Square 
              value={`${(rowIndex + 1).toString().padStart(2, '0')}${
                (colIndex + 1).toString().padStart(2, '0')
              }`} 
              onSquareClick={handleClick}
              key={`${rowIndex}-${colIndex}`} 
            />
          ))}
        </div>
      ))}
    </>
  );
}