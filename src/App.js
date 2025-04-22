import React, { useEffect, useState } from "react";
import "./App.css";
import jujinHeart from './image/pkht.png'; // 작은 하트들
import centerHeart from './image/sujin.png'; // 고정 큰 하트
import fairy from './image/fairy.png'; // 요정 캐릭터
import ground from './image/ground.png'; // 픽셀 게임 배경
import hhhh from './image/hhhh.png'; // 픽셀 게임 배경


function App() {
  const [hearts, setHearts] = useState([]);
  const [screen, setScreen] = useState("home");
  const [showGameContent, setShowGameContent] = useState(false);
  const toggleContent = () => {
    if (showGameContent === null) {
      setShowGameContent(true); // game-content 표시
    } else if (showGameContent === true) {
      setShowGameContent(false); // pink-content 표시
    } else {
      setShowGameContent(true); // 다시 game-content
    }
  };
  


  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 20 + Math.random() * 30,
      duration: 5 + Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="App">
      {/* 반짝이 하트들 */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="sparkle-heart"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {screen === "home" && (
        <>
          {/* 떠다니는 하트들 */}
          {hearts.map((heart) => (
            <img
              key={heart.id}
              src={jujinHeart}
              className="floating-heart"
              style={{
                left: `${heart.left}%`,
                width: `${heart.size}px`,
                animationDuration: `${heart.duration}s`,
              }}
              alt="heart"
            />
          ))}

          {/* 가운데 고정 하트 + 메시지 */}
          <div className="center-heart-container">
            <img
              src={centerHeart}
              alt="center heart"
              className="center-heart"
              onClick={() => setScreen("quiz")}
            />
            <div className="heart-message">하트를 눌러줘</div>
          </div>
        </>
      )}

      {screen === "quiz" && (
        <div className="quiz-screen">
          <div className="game-window">
            <div className="window-header" onClick={toggleContent}>
              💻 미니게임
            </div>
            {showGameContent === true && (
              <div className="game-content">
                <h2>게임을 시작해볼까요?</h2>
                <img src={fairy} alt="fairy" className="fairy" />
                <button className="start-btn">
                  <img src={hhhh} alt="start" style={{ width: 300, height: 300 }} />
                </button>
              </div>
            )}

            {showGameContent === false && (
              <div className="pink-content" style={{ backgroundColor: "pink", padding: "30px", borderRadius: "20px"}}>
                <h2 style={{ color: "#fff" }}>🌸 다른 콘텐츠가 나타났어요!</h2>
              </div>
            )}
            
          </div>
        </div>
      )}


    </div>
  );
}

export default App;


