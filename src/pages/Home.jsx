import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { setCategoryId } from '../redux/slices/filterSlice'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/Pizza/Skeleton'
import Pizza from '../components/Pizza'
import { Pagination } from '../components/Pagination'
import { SearchContext } from '../App'

export default function Home() {
const dispatch = useDispatch();
console.log(dispatch);
const categoryId = useSelector(state=> state.filterSlice.categoryId);
console.log(categoryId)
  const {searchValue} = React.useContext(SearchContext);
    const [pizzas,setPizzas] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(true);
    // const [categoryId, setCategoryId] = React.useState(0);
    const [currentPage,setCurrentPage] = React.useState(1);
    const [sortType, setSortType] = React.useState({
      name:'популярности (по убыванию)',sortProperty:'rating'
    });

    const onChangeCategory = (id) => {
      console.log(id);
      dispatch(setCategoryId(id));
    };
    

   React.useEffect(()=>{
    setIsLoading(true)
     async function fetchData() {
       const order = sortType.sortProperty.includes('-');
       const category = categoryId > 0?`category=${categoryId}` :''
       const sortBy = sortType.sortProperty.replace('-','');
       const search = searchValue ? `&search=${searchValue}`:'';
      await fetch(`https://62a2fcc35bd3609cee5f6470.mockapi.io/items?limit=4&page=${currentPage}&${category}&sortBy=${sortBy}&order=${order?'asc':'desc'}${search}`).then(res=>res.json()).then(arr=>{
         setPizzas(arr)
        setIsLoading(false)})
       
     }
     fetchData()
     window.scrollTo(0,0);
   },[categoryId,sortType,searchValue,currentPage])
   const filteredPizzas = pizzas.map((element)=> {
     return <Pizza key={element.id} img={element.imageUrl} {...element}/>})
    // return <Pizza key={element.id} img={element.imageUrl}{...element}})/>}
    const skeletons = ([...new Array(10)].map((_,i)=>{return <Skeleton key={i}/>}))
  return (
      
    <div className="container">
      <div className="content__top">
            <Categories value = {categoryId} onChangeCategory={onChangeCategory}/>
            <Sort value={sortType} onChangeSort={(i)=>setSortType(i)}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {isLoading?skeletons:filteredPizzas}
          </div>
          <Pagination onChangePage={number=> setCurrentPage(number)}/>
    </div>
  )
  }
