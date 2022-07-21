import React from 'react'
import debounce from 'lodash.debounce'
import styles from './Search.module.scss'
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { selectSearchValue, setSearchValue } from '../../redux/slices/filterSlice';
export default function Search() {
  const [value,setValue] = React.useState('');
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue)
  const inputRef = React.useRef<HTMLInputElement>(null);

const updateSearchValue = React.useCallback(
  debounce((value: string)=>{
    dispatch(setSearchValue(value))
  },150),[]
)
const onChangeInput = (event: any) => {
  setValue(event.target.value)
  updateSearchValue(event.target.value)
}

  const clearValue = () => {
    dispatch(setSearchValue(''));
    setValue('');
    
      inputRef.current?.focus();
    
    
  }

  return (

    <div className={styles.root}>
        <img className={styles.icon} src='./img/search.png' alt='search-loop'/>
        <input ref={inputRef} value={value} placeholder='Поиск пиццы...' className={styles.input} onChange={onChangeInput}/>
        {searchValue && <img src='./img/close.png' alt='Clear search value' className={styles.clearIcon} onClick={clearValue}/>}
    </div>
  )
}
