import React from 'react'

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
    
  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытая']
  return (
    <div className="categories">
              <ul>
                {categories.map((el,index)=>{
                  return <li key={index} onClick={()=>setActiveIndex(index)} className={activeIndex === index ?"active":''}>{el}</li>
                })}
              </ul>
              {console.log(activeIndex)}
            </div>
            
  )
}
