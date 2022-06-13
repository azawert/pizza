import React from 'react'

export default function Categories({value,onChangeCategory}) {
  
  
    
  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытая']
  return (
    <div className="categories">
              <ul>
                {categories.map((el,index)=>{
                  return <li key={index} onClick={()=>onChangeCategory(index)} className={value === index ?"active":''}>{el}</li>
                })}
              </ul>
              {console.log(categories[value])}
            </div>
            
  )
}
