import React from 'react'
import styles from './Search.module.scss'
export default function Search({searchValue,setSearchValue}) {
  const clearValue = () => {
    setSearchValue('');
  }

  return (

    <div className={styles.root}>
        <img className={styles.icon} src='./img/search.png' alt='search-loop'/>
        <input value={searchValue} placeholder='Поиск пиццы...' className={styles.input} onChange={e=>setSearchValue(e.target.value)}/>
        {searchValue && <img src='./img/close.png' alt='Clear search value' className={styles.clearIcon} onClick={clearValue}/>}
    </div>
  )
}
