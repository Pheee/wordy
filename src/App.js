import {useState} from "react";

function App() {
  const boxes = [];
  for (let rows = 0; rows < 6; rows++) {
    const newRow = [];
    for (let cols = 0; cols < 5; cols++) {
      newRow.push(<div className="wordbox" key={rows+"-"+cols}>A</div>);
    }
    boxes.push(newRow);
  }
  const [letter, setLetter] = useState(boxes);

  return (
    <div>
      <h1>Wordy</h1>
      <div className="wordboxrow">
        {letter.map((row, index) =>
          row.map((col, index) => {
            return col;
          })
        )}
      </div>
    </div>
  );
}

export default App;
