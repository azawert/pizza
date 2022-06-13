import React from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/Pizza/Skeleton'
import Pizza from '../components/Pizza'
export default function Home() {
    const [pizzas,setPizzas] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(true);
   React.useEffect(()=>{
     async function fetchData() {
       await fetch('https://62a2fcc35bd3609cee5f6470.mockapi.io/items').then(res=>res.json()).then(arr=>{
         setPizzas(arr)
        setIsLoading(false)});
       
     }
     fetchData()
     window.scrollTo(0,0);
   },[])

  return (
      
    <div className="container">
      <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {isLoading?([...new Array(10)].map((_,i)=>{return <Skeleton key={i}/>})):pizzas.map((element)=> {
            return <Pizza key={element.id} img={element.imageUrl}{...element} />
          })}
          </div>
    </div>
  )
}
