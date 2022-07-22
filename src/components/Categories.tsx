import React from 'react'

type CategoriesProps = {
  value: number;
  onChangeCategory: (id:number) => void;
}

const Categories: React.FC<CategoriesProps> = ({value,onChangeCategory}) => {
  
  
    
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