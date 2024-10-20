import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import './CelebrationScreen.css';

const CelebrationScreen = () => {
    const audioRef = useRef(null);
  
    // useEffect để tự động phát nhạc khi component được render
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, []);
  return (
    <div className="celebration-screen">
        <audio ref={audioRef} src="/formymother.mp3" loop />
      <TypeAnimation
        sequence={[
          "Chúc mừng Ngày phụ nữ Việt Nam 20/10! 🎉", 3500,
          "Mẹ là người phụ nữ tuyệt vời nhất! 💖", 3500,
          "Con luôn biết ơn vì tình yêu thương vô điều kiện của mẹ! 🌹", 3500,
          "Mong mẹ luôn khỏe mạnh và hạnh phúc mỗi ngày! 🌷", 3500,
          "Mẹ là nguồn động lực lớn nhất của con! 💪", 3500,
          "Nha mẹ! 💕", 3500,
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
