import React from 'react'

export default function Pagination({ page, setPage, rangeLength }) {

    let pages = [];
    const offset = page < 5 ? 5 - page : 0;
    for (let i = page - 5; i <= page + 5; i++) {
    pages.push(i + offset);
  }
  return pages.map((pn) => 
    <>
        <button className="pagination-button" onClick={() => setPage(pn)}>{pn}</button>
            
    </>
    );
}
    
