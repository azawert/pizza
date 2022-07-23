import React from 'react'
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux'
import { fetchPizzas, selectItems, selectStatus, Status } from '../redux/slices/pizzaSlice';
import {  selectCategoryId, selectCurrentPage, selectSearchValue, selectSortType, setCategoryId,setCurrentPage,setFilters} from '../redux/slices/filterSlice'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/Pizza/Skeleton'
import Pizza from '../components/Pizza'
import { Pagination } from '../components/Pagination'
import { useAppDispatch } from '../redux/store';


export default function Home() {
const dispatch = useAppDispatch();
const navigate = useNavigate();
const categoryId = useSelector(selectCategoryId);
const sortType = useSelector(selectSortType)
const currentPage = useSelector(selectCurrentPage)
const items = useSelector(selectItems)
const status = useSelector(selectStatus)
const searchValue = useSelector(selectSearchValue)
  
    const fetchPizza = () =>{
      
       
         const order = sortType.includes('-') ? '-' : '';
         const category = categoryId > 0?`category=${categoryId}` :''
         const sortBy = sortType.replace('-','');
         const search = searchValue ? `&search=${searchValue}`:'';
        
          dispatch(
            fetchPizzas({
              order,
              category,
              sortBy,
              search,
              currentPage:String(currentPage)
            })
            )
        
       
        
       
       window.scrollTo(0,0);
      }
       
    const onChangeCategory = (id:number) => {
      dispatch(setCategoryId(id));
    };
    const onChangePage = (number:number) => {
      dispatch(setCurrentPage(number))
    };

    React.useEffect(()=>{
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryId,
        currentPage,
      })
      navigate(`?${queryString}`)
   },[categoryId,sortType,searchValue,currentPage,navigate])
   React.useEffect(()=> {
    fetchPizza();
   },[categoryId,sortType,searchValue,currentPage])

   

   const filteredPizzas = items.map((element: any)=> {
     return <Pizza key={element.id} {...element}/>})
    const skeletons = ([...new Array(10)].map((_,i)=>{return <Skeleton key={i}/>}))
  return (
      
    <div className="container">
      <div className="content__top">
            <Categories value = {categoryId} onChangeCategory={onChangeCategory}/>
            <Sort/>
          </div>
          {status === Status.FAIL?<div><h2 className='content__title'>Произошла ошибка</h2><h3 className='content__error_message'>Во время запроса произошла ошибка.</h3><p className='content__error_paragraph'>Попробуйте через некоторое время</p></div>:<><h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {status === Status.LOADING?skeletons:filteredPizzas}
          </div></>}
          <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  )
  }
