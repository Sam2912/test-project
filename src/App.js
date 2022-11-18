import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpeechRecognition } from "react-speech-kit";

function App() {
  const [text, setText] = useState();

  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => setText(result),
  });

  return (
    <div>
      <h2>Converting the Speech to Text...</h2>
      <textarea value={text}></textarea>
      <p>
        <button onClick={listen}>Listen</button>
        <button onClick={stop}>Stop</button>
      </p>
    </div>
  );
}

export default App;
