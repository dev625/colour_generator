import "./App.css";
import React, { useState, Fragment } from "react";
import SingleColour from "./SingleColour";
import Values from "values.js";
import { ReactComponent as Rainbow } from "./rainbow.svg";

function App() {
  const [colour, setColour] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#eca1a6").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colours = new Values(colour).all(10);
      setList(colours);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <Fragment>
      <section className="container">
        <h3>Colour Generator</h3> <Rainbow />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={colour}
            onChange={(e) => setColour(e.target.value)}
            placeholder="#eca1a6"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((colour, index) => {
          return (
            <SingleColour
              key={index}
              {...colour}
              index={index}
              hexColor={colour.hex}
            />
          );
        })}
      </section>
    </Fragment>
  );
}

export default App;
