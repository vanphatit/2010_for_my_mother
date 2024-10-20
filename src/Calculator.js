import React, { useState } from "react";

const Calculator = ({ onEqualPress }) => {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(display); // Sử dụng eval để tính toán
        setDisplay(result);
        onEqualPress(); // Chuyển màn hình khi bấm "="
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else if (value === "DEL") {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} disabled id="display" />
      <div className="buttons">
        {["C", "/", "*", "DEL", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "0", "."].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
