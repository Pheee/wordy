import {useState} from "react";

function WordBox(props) {
    const [letter, setLetter] = useState("");
    // setLetter(props.letter);
    return (
      <div className="wordbox">
      {props.letter}
      </div>
    );
  }
  
  export default WordBox;
  