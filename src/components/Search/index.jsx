import React from 'react'
import styles from './Search.module.scss'
export default function Search() {
  return (
    <div className={styles.root}>
        <img className={styles.icon} src='./img/search.png' alt='search-loop'/><input placeholder='Поиск пиццы...' className={styles.input}></input>
    </div>
  )
}
