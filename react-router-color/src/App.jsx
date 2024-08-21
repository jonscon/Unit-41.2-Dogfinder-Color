import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import './App.css'

import ColorsList from "./ColorsList.jsx";
import ColorDetails from "./ColorDetails.jsx";
import NewColorForm from "./NewColorForm.jsx";

function App() {
  // default colors
  const colors = () => [
    {
      colorName: "blue", 
      colorValue: "rgb(0,0,255)"
    }, 
    {
      colorName: "red", 
      colorValue: "rgb(255,0,0)"
    }, 
    {
      colorName: "green", 
      colorValue: "rgb(0,128,0)"
    }
  ];

  const [colorsList, setColorsList] = useState(colors);

  // add new color
  const createColor = newColor => {
    setColorsList([newColor, ...colorsList]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<ColorsList colors={colorsList} />} />
          <Route path="/colors/:name" element={<ColorDetails colors={colorsList} />}/>
          <Route path="/colors/new" element={<NewColorForm createColor={createColor}/>} />
          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
