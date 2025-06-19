import React, { useState, useEffect } from 'react';
import './Card.css';
import { shuffleTexts } from './bingoTexts';

function Card() {
  const [bingoSlots, setBingoSlots] = useState([]);
  const [clickedSlots, setClickedSlots] = useState(new Set());
  const [showBingo, setShowBingo] = useState(false);

  useEffect(() => {
    setBingoSlots(shuffleTexts());
  }, []);

  const handleClick = (index) => {
    setClickedSlots(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const checkWin = () => {
      for (let row = 0; row < 5; row++) {
        let horizontalCount = 0;
        for (let col = 0; col < 5; col++) {
          const index = row * 5 + col;
          if (clickedSlots.has(index)) {
            horizontalCount++;
          }
        }
        if (horizontalCount === 5) {
          setShowBingo(true);
          // Ukryj napis BINGO po 5 sekundach
          setTimeout(() => {
            setShowBingo(false);
          }, 5000);
          return;
        }
      }

      for (let col = 0; col < 5; col++) {
        let verticalCount = 0;
        for (let row = 0; row < 5; row++) {
          const index = row * 5 + col;
          if (clickedSlots.has(index)) {
            verticalCount++;
          }
        }
        if (verticalCount === 5) {
          setShowBingo(true);
          // Ukryj napis BINGO po 5 sekundach
          setTimeout(() => {
            setShowBingo(false);
          }, 5000);
          return;
        }
      }

      setShowBingo(false);
    };

    checkWin();
  }, [clickedSlots]);

  return (
    <div className="card">
      <h2>Bingo Card</h2>
      <div className="bingo-grid">
        {bingoSlots.map((text, index) => (
          <div 
            key={index} 
            className={`bingo-slot ${clickedSlots.has(index) ? 'clicked' : ''}`}
            onClick={() => handleClick(index)}
          >
            {text}
          </div>
        ))}
      </div>
      {showBingo && (
        <div className="bingo-win">
          <h1>BINGO!</h1>
        </div>
      )}
    </div>
  );
}

export default Card;
