import words from "./words";

function App() {
  const randomWord = Math.floor(Math.random()*words.length)+1;
  const secretWord = words[randomWord];
  console.log(secretWord);
  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "DEL",
    "ENTER",
  ];
  const boxes = [];
  for (let rows = 0; rows < 6; rows++) {
    const newRow = [];
    for (let cols = 0; cols < 5; cols++) {
      newRow.push(
        <div
          className="wordbox"
          key={rows + "-" + cols}
          id={rows + "-" + cols}
        ></div>
      );
    }
    boxes.push(newRow);
  }
  // const [letter, setLetter] = useState(boxes);

  const MAX_CHARS = 5;
  let currentRow = 0,
    currentCol = 0;

  // function updateLetter(event) {
  //   setLetter(prevValue => {
  //     // console.log(event.target.value);
  //     const newBoxes = prevValue;
  //     //const exactCell = cell.split("-");
  //     //console.log(exactCell);
  //     console.log(row+" "+col);
  //     console.log(newBoxes[row][col]);
  //     newBoxes[row].splice(col, 1, <div className="wordbox" key={row+"-"+col}>{event.target.value}</div>);
  //     console.log(newBoxes[row][col]);
  //     console.log(prevValue);
  //     console.log(newBoxes);
  //     return newBoxes;
  //   })
  // }

  function pressKey(event) {
    const key = event.target.value;
    if (key && key === "ENTER") {
      let guess = "";
      const result = [];
      for (let cols = 0; cols < 5; cols++) {
        const foundElement = document.getElementById(currentRow + "-" + cols);
        if (foundElement) {
          guess += foundElement.innerHTML;
        }
      }
      console.log("Guess:" + guess);
      if (guess && guess.length === 5) {
        if(words.indexOf(guess) < 0) {
          console.log("Bad word");
          return;
        }
        console.log(guess+" "+secretWord);
        if (guess === secretWord) {
          result.push("rightGuess");
          result.push("rightGuess");
          result.push("rightGuess");
          result.push("rightGuess");
          result.push("rightGuess");
          console.log("MATCH");
        } else {
          for (let char = 0; char < 5; char++) {
            const letter = guess.charAt(char);
            if (letter === secretWord.charAt(char)) {
              result.push("rightGuess");
            } else if (secretWord.indexOf(letter) >= 0) {
              result.push("rightButWrongPosition");
            } else {
              result.push("notInWord");
            }
          }
        }
        console.log(result);
        for (let cols = 0; cols < 5; cols++) {
          const foundElement = document.getElementById(currentRow + "-" + cols);
          if (foundElement) {
            foundElement.classList.add(result[cols]);
          }
        }
        currentRow++;
        currentCol=0;
      }
    } else if (key && key === "DEL" && currentCol > 0) {
      currentCol--;
      const foundElement = document.getElementById(
        currentRow + "-" + currentCol
      );
      if (foundElement) {
        foundElement.innerHTML = "";
      }
      console.log("DEL " + currentCol);
    } else if (key && key !== "DEL" && currentCol <= MAX_CHARS) {
      const foundElement = document.getElementById(
        currentRow + "-" + currentCol
      );
      if (foundElement) {
        foundElement.innerHTML = event.target.value;
        currentCol++;
      }
      console.log(event.target.value + " " + currentCol);
    }
  }

  return (
    <div>
      <h1>Wordy</h1>
      <div className="wordboxrow">
        {boxes.map((row, index) =>
          row.map((col, index) => {
            return col;
          })
        )}
        {keys.map((key, index) => {
          return (
            <button class="btn btn-secondary btn-lg" key={key} onClick={pressKey} value={key}>
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
