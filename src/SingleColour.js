import React, { useState, useEffect } from "react";
import rgbToHex from "./Utils";

const SingleColour = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb); //this can also be used if not using the library returned result
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue.toUpperCase()}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColour;
