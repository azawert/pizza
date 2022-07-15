import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader"
function PizzaInfo() {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const {id} = useParams();
  const [pizza,setPizza] = React.useState()
  const [isLoading,setIsLoading] = React.useState(true);
  React.useEffect( ()=>{
    async function getSinglePizza() {
      try{const {data} = await axios.get(`https://62a2fcc35bd3609cee5f6470.mockapi.io/items/`+id)
      setPizza(data)
      }
      catch(error) {
        alert(error);
      }finally {
        setIsLoading(false)
      }
    }
    getSinglePizza();
  },[])
    
  return (
    <>{isLoading ? <ClipLoader color={'aqua'} loading={true} cssOverride={override} size={150} />:<div className='container'>
        <h2>{pizza.title}</h2>
        <img src={pizza.imageUrl} alt='pizza'/>
        <p>Пицца - суперзвезда итальянской кухни. Национальное блюдо с хрустящим тестом, сочной начинкой, расплавленным сыром и ароматным томатным соусом - воплощение вкуса к жизни и просто невероятно аппетитная здоровая еда. Если вы любите пиццу так же, как мы, присоединяйтесь к блогу о лучшем блюде итальянской кухни и обо всем, что с ним связано. </p>
    </div>}</>
  )
}

export default PizzaInfo
