import React from 'react'
import axios from 'axios'

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
const categoryId = useSelector(state=> state.filterSlice.categoryId);
const sortType = useSelector(state=>state.filterSlice.sort.sortProperty)
  const {searchValue} = React.useContext(SearchContext);
    const [pizzas,setPizzas] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(true);
    const [currentPage,setCurrentPage] = React.useState(1);
    // const [sortType, setSortType] = React.useState({
    //   name:'популярности (по убыванию)',sortProperty:'rating'
    // });

    const onChangeCategory = (id) => {
      dispatch(setCategoryId(id));
    };
    

   React.useEffect(()=>{
    setIsLoading(true)
     async function fetchData() {
       const order = sortType.includes('-');
       const category = categoryId > 0?`category=${categoryId}` :''
       const sortBy = sortType.replace('-','');
       const search = searchValue ? `&search=${searchValue}`:'';
       axios.get(`https://62a2fcc35bd3609cee5f6470.mockapi.io/items?limit=4&page=${currentPage}&${category}&sortBy=${sortBy}&order=${order?'asc':'desc'}${search}`).then(res=>{
        setPizzas(res.data)
        setIsLoading(false)
       })
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
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {isLoading?skeletons:filteredPizzas}
          </div>
          <Pagination onChangePage={number=> setCurrentPage(number)}/>
    </div>
  )
  }
