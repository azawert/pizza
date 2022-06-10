import './scss/app.scss'
import Header from './components/Header.jsx'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import React from 'react'
import {Routes,Route} from 'react-router-dom'


function App() {

 



  return (
    <div className="App">
      
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
        <Home/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
