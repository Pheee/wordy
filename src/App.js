import React, { Component } from "react";
import words from "./words";

class App extends Component {
  // static MAX_CHARS = 5;
  // static secretWord = words[Math.floor(Math.random() * words.length) + 1];
  // let currentRow = 0,
  //   currentCol = 0;

  componentDidMount() {
    for (let rows = 0; rows < 6; rows++) {
      for (let cols = 0; cols < 5; cols++) {
        const foundElement = document.getElementById(rows + "-" + cols);
        if (foundElement) {
          foundElement.addEventListener("animationend", (e) => {
            foundElement.classList.remove("apply-shake");
          });
        }
      }
    }
  }

  constructor() {
    super();
    this.state = {
      secretWord: words[Math.floor(Math.random() * words.length) + 1],
      currentRow: 0,
      currentCol: 0,
      keys: [
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
      ],
      boxes: [],
      MAX_CHARS: 5,
      showEnd: false,
    };
    console.log(this.state);
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
      this.state.boxes.push(newRow);
    }
    // const [letter, setLetter] = useState(boxes);

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
    this.pressKey = this.pressKey.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({
      showEnd: false,
    });
  }

  handleShow() {
    this.setState({
      showEnd: true,
    });
  }

  pressKey(event) {
    let localRow = this.state.currentRow;
    let localCol = this.state.currentCol;
    let gameOver = false;
    const key = event.target.value;
    if (key && key === "ENTER") {
      let guess = "";
      const result = [];
      for (let cols = 0; cols < 5; cols++) {
        const foundElement = document.getElementById(localRow + "-" + cols);
        if (foundElement) {
          guess += foundElement.innerHTML;
        }
      }
      console.log("Guess:" + guess);
      if (guess && guess.length === 5) {
        if (words.indexOf(guess) < 0) {
          console.log("Bad word");
          for (let cols = 0; cols < 5; cols++) {
            const foundElement = document.getElementById(localRow + "-" + cols);
            if (foundElement) {
              event.preventDefault();
              foundElement.classList.add("apply-shake");
            }
          }
          return;
        }
        console.log(guess + " " + this.state.secretWord);
        if (guess === this.state.secretWord) {
          result.push("rightGuess");
          result.push("rightGuess");
          result.push("rightGuess");
          result.push("rightGuess");
          result.push("rightGuess");
          console.log("MATCH");
          gameOver = true;
        } else {
          for (let char = 0; char < 5; char++) {
            const letter = guess.charAt(char);
            if (letter === this.state.secretWord.charAt(char)) {
              result.push("rightGuess");
            } else if (this.state.secretWord.indexOf(letter) >= 0) {
              result.push("rightButWrongPosition");
            } else {
              result.push("notInWord");
            }
          }
        }
        console.log(result);
        for (let cols = 0; cols < 5; cols++) {
          const foundElement = document.getElementById(localRow + "-" + cols);
          if (foundElement) {
            foundElement.classList.add(result[cols]);
            const keyElement = document.getElementById(foundElement.innerHTML);
            if (keyElement) {
              if (result[cols] === "rightGuess") {
                keyElement.classList.remove("rightButWrongPosition");
              }
              keyElement.classList.add(result[cols]);
            }
          }
        }
        localCol = 0;
        localRow++;
      }
    } else if (key && key === "DEL" && localCol > 0) {
      localCol--;
      const foundElement = document.getElementById(localRow + "-" + localCol);
      if (foundElement) {
        foundElement.innerHTML = "";
      }
      console.log("DEL " + localCol);
    } else if (key && key !== "DEL" && localCol <= this.state.MAX_CHARS) {
      const foundElement = document.getElementById(localRow + "-" + localCol);
      if (foundElement) {
        foundElement.innerHTML = event.target.value;
        localCol++;
      }
      // console.log(event.target.value + " " + localCol);
    }
    // console.log(localRow);
    // console.log(localCol);
    this.setState({
      currentCol: localCol,
      currentRow: localRow,
      showEnd: gameOver,
    });
  }

  render() {
    return (
      <div>
        <h1>Wordy</h1>
        <div className="wordboxrow">
          {this.state.boxes.map((row, index) =>
            row.map((col, index) => {
              return col;
            })
          )}
        </div>
        <div
          className="btn-toolbar keyboxrow10"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          {this.state.keys.slice(0, 10).map((key, index) => {
            return (
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                key={key}
                onClick={this.pressKey}
                value={key}
                id={key}
              >
                {key}
              </button>
            );
          })}
        </div>
        <div className="btn-toolbar keyboxrow9">
          {this.state.keys.slice(10, 19).map((key, index) => {
            return (
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                key={key}
                onClick={this.pressKey}
                value={key}
                id={key}
              >
                {key}
              </button>
            );
          })}
        </div>
        <div className="btn-toolbar keyboxrow9">
          {this.state.keys.slice(19).map((key, index) => {
            return (
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                key={key}
                onClick={this.pressKey}
                value={key}
                id={key}
              >
                {key}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
