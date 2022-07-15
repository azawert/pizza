import './scss/app.scss'
import Header from './components/Header.jsx'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import PizzaInfo from './components/PizzaInfo';

function App() {

 
 

  return (
    
     <div className="wrapper">
      
        <Header/>
        <div className="content">
      
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path ='/pizza/:id' element={<PizzaInfo/>}/>
            <Route path='*' element={<NotFound/>}/>
          
          </Routes>
          
        </div>
      
      </div>
    
    
  );
}

export default App;
