import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import styled from "styled-components";

// #468189 (teal)
// #0F2934 (gunmetal)
// #888888 (grey)
// #F7F7F2 (white)

const Main = styled.main`
  background-color: #111;
`;

const Highlight = styled.div`
  ${'' /* position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 70%);
  border-radius: 50%;
  transform: translate(-40%, -40%);
  pointer-events: none;
  mix-blend-mode: overlay;
  transition: transform 0.1s ease-out; */}
`;

function App() {
  const [highlightPos, setHighlightPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setHighlightPos({ x: e.clientX - 50, y: e.clientY - 50 }); // Ajustar para centralizar o efeito
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Main className="App">
      <Highlight
        style={{ top: `${highlightPos.y}px`, left: `${highlightPos.x}px` }}
      />
      <Home />
    </Main>
  );
}

export default App;
