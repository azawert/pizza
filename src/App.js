import './scss/app.scss'
import Header from './components/Header.jsx'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart'
import React from 'react'
import {Routes,Route} from 'react-router-dom'


function App() {

 const [searchValue,setSearchValue] = React.useState('');



  return (
    <div className="App">
      
    <div className="wrapper">
      <Header searchValue = {searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
        
        <Routes>
          <Route path='' element={<Home searchValue={searchValue}/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>
          
        </Routes>
          
        </div>
      </div>
    </div>
    
  );
}

export default App;
