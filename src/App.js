import React from 'react'; 
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home'
import Header from './Header';
import {About} from './pages/About';
import {Batik} from './pages/Batik';
import {Gobelen} from './pages/Gobelen';
import {Notfoundpage} from './pages/Notfoundpage';
import Topnavs from './Topnavs'

function App() {
  return (
    
    <div className="App">
      <Topnavs/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/batik" element={<Batik />}/>
        <Route path="/gobelen" element={<Gobelen />}/>
        <Route path="*" element={<Notfoundpage />}/>
      </Routes>
    {/*Home*/}
      {/*Header*/}

      {/*Banner*/}
        {/*Search*/}

      {/*Cards*/}

      {/*Footer*/}

    {/*SearchPage*/}
      {/*Header*/}

    </div>
  );
}

export default App;