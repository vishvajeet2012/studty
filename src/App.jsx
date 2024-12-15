import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PureFunction from './Function/PureFunction';
import ClassCompo from './compo and element/ClassCompo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoApp from './Todo';
import Navbar from './NavBar';

function App() {
  return (
    <>
      {/* Commented-out components */}
      {/* <PureFunction /> */}
      {/* <ClassCompo /> */}

      {/* React Router Setup */}
<Navbar/>


        <Routes>
          <Route path="/PureFunction" element={<PureFunction />} />
          <Route path="/ClassCompo" element={<ClassCompo />} />
          <Route path="/todo" element={<TodoApp/>}/>
        </Routes>
  
    </>
  );
}

export default App;

