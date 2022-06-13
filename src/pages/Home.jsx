import React from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/Pizza/Skeleton'
import Pizza from '../components/Pizza'

export default function Home() {
    const [pizzas,setPizzas] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
      name:'популярности (по убыванию)',sortProperty:'rating'
    });
   React.useEffect(()=>{
    setIsLoading(true)
     async function fetchData() {
       const order = sortType.sortProperty.includes('-');
       const category = categoryId > 0?`category=${categoryId}` :''
       const sortBy = sortType.sortProperty.replace('-','')
      await fetch(`https://62a2fcc35bd3609cee5f6470.mockapi.io/items?${category}&sortBy=${sortBy})}&order=${order?'asc':'desc'}`).then(res=>res.json()).then(arr=>{
         setPizzas(arr)
        setIsLoading(false)})
       
     }
     fetchData()
     window.scrollTo(0,0);
   },[categoryId,sortType])
   
  return (
      
    <div className="container">
      <div className="content__top">
            <Categories value = {categoryId} onChangeCategory={(index)=> setCategoryId(index)}/>
            <Sort value={sortType} onChangeSort={(i)=>setSortType(i)}/>
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
