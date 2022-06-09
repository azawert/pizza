import React from 'react'

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="categories">
              <ul>
                <li onClick={()=>setActiveIndex(activeIndex+1)} className={activeIndex === 0 ?"active":''}>Все</li>
                <li onClick={()=>setActiveIndex(activeIndex+2)} className={activeIndex === 1 ?"active":''}>Мясные</li>
                <li onClick={()=>setActiveIndex(activeIndex+3)} className={activeIndex === 2 ?"active":''}>Вегетарианская</li>
                <li onClick={()=>setActiveIndex(activeIndex+4)} className={activeIndex === 3 ?"active":''}>Гриль</li>
                <li onClick={()=>setActiveIndex(activeIndex+5)} className={activeIndex === 4 ?"active":''}>Острые</li>
                <li onClick={()=>setActiveIndex(activeIndex+6)} className={activeIndex === 5 ?"active":''}>Закрытые</li>
              </ul>
            </div>
  )
}
