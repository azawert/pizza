import './scss/app.scss'
import Header from './components/Header.jsx'
import Categories from './components/Categories'
import Sort from './components/Sort'
import Pizza from './components/Pizza'
import Pizzas from './assets/pizzas.json'

function App() {
  console.log(Pizzas);

  return (
    <div className="App">
      
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {/* <Pizza img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg' title='Чизбургер-пицца' price='250'/> */}
          {Pizzas.map((element,index)=> {
            return <Pizza key={index}img={element.imageUrl}{...element} />
          })}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
