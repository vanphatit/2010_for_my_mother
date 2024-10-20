import React from "react";
import { TypeAnimation } from "react-type-animation";
import './CelebrationScreen.css';

const CelebrationScreen = () => {
  return (
    <div className="celebration-screen">
      <TypeAnimation
        sequence={[
          "Chúc mừng Ngày phụ nữ Việt Nam 20/10! 🎉", 1500,
          "Mẹ là người phụ nữ tuyệt vời nhất! 💖", 1500,
          "Con luôn biết ơn vì tình yêu thương vô điều kiện của mẹ! 🌹", 1500,
          "Mong mẹ luôn khỏe mạnh và hạnh phúc mỗi ngày! 🌷", 1500,
          "Mẹ là nguồn động lực lớn nhất của con! 💪", 1500
        ]}
        wrapper="h1"
        speed={50}
        style={{ fontSize: '3em', color: '#f8b400', fontFamily: 'Pacifico, cursive' }}
        repeat={Infinity}
      />
      <div className="flower-animation">
        <div className="flower">🌸</div>
        <div className="flower">🌼</div>
        <div className="flower">🌷</div>
      </div>
    </div>
  );
};

export default CelebrationScreen;
