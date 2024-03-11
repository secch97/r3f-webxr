import React from 'react'
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { CubeContainer } from './components/cube/CubeContainer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CubeContainer></CubeContainer>}></Route>
        <Route path="/cube" element={<CubeContainer></CubeContainer>}></Route>
      </Routes>
    </>
  )
}

export default App
