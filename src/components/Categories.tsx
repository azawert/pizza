import React from 'react'

const Categories = ({value,onChangeCategory}) => {
  
  
    
  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытая']
  return (
    <div className="categories">
              <ul>
                {categories.map((el,index)=>{
                  return <li key={index} onClick={()=>onChangeCategory(index)} className={value === index ?"active":''}>{el}</li>
                })}
              </ul>
              
            </div>
            
  )
}

export default Categories