import React from 'react';
import './App.css';
import Form from './Form';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Component from './Component';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route exact path="/userdata" element={<Component/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </>

  );
}

export default App;

      