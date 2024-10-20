import React, { useState } from "react";
import Calculator from "./Calculator";
import CelebrationScreen from "./CelebrationScreen";
import './Calculator.css';

function App() {
  const [isCelebration, setIsCelebration] = useState(false);

  const handleEqualPress = () => {
    setIsCelebration(true);
  };

  return (
    <div className="App">
      {!isCelebration ? (
        <Calculator onEqualPress={handleEqualPress} />
      ) : (
        <CelebrationScreen />
      )}
    </div>
  );
}

export default App;
