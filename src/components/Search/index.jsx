import React from 'react'
import styles from './Search.module.scss'
import { SearchContext } from '../../App';
export default function Search() {
  const {searchValue,setSearchValue} = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const clearValue = () => {
    setSearchValue('');
    inputRef.current.focus();
    
  }

  return (

    <div className={styles.root}>
        <img className={styles.icon} src='./img/search.png' alt='search-loop'/>
        <input ref={inputRef} value={searchValue} placeholder='Поиск пиццы...' className={styles.input} onChange={e=>setSearchValue(e.target.value)}/>
        {searchValue && <img src='./img/close.png' alt='Clear search value' className={styles.clearIcon} onClick={clearValue}/>}
    </div>
  )
}
