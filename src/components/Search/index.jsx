import React from 'react'
import debounce from 'lodash.debounce'
import styles from './Search.module.scss'
import { SearchContext } from '../../App';
export default function Search() {
  const [value,setValue] = React.useState('');
  const {searchValue,setSearchValue} = React.useContext(SearchContext);
  const inputRef = React.useRef();

const updateSearchValue = React.useCallback(
  debounce((value)=>{
    setSearchValue(value)
  },250,[])
)
const onChangeInput = event => {
  setValue(event.target.value)
  updateSearchValue(event.target.value)
}

  const clearValue = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
    
  }

  return (

    <div className={styles.root}>
        <img className={styles.icon} src='./img/search.png' alt='search-loop'/>
        <input ref={inputRef} value={value} placeholder='Поиск пиццы...' className={styles.input} onChange={onChangeInput}/>
        {searchValue && <img src='./img/close.png' alt='Clear search value' className={styles.clearIcon} onClick={clearValue}/>}
    </div>
  )
}
