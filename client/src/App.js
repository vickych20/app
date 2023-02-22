import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";








function App() {
  return <div className="App">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>home components</h1>}/>
        <Route path="/add" element={<h1>add components</h1>}/>
        <Route path="/update" element={<h1>update components</h1>}/>
        <Route path="/logout" element={<h1>logout components</h1>}/>
        <Route path="/profile" element={<h1>profile components</h1>}/>

      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
