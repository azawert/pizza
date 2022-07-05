import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './pagination.module.scss';
export const Pagination = ({onChangePage,currentPage}) => {
  return (
    <ReactPaginate
    className={styles.root}
            breakLabel='...'
            nextLabel='>'
            onPageChange={e=>{onChangePage(e.selected+1)}}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={currentPage-1}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
  )
}
