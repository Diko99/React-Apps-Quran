import React from 'react'

const SearchBar = (props) => {
   return (
      <div className="container">
         <input className="form-control mr-sm-2" type="search" placeholder="Cari surah" aria-label="Search"
            onChange    = {props.onHandleInput}
            value       = {props.onHandleValue}
          />
      </div>
   )
}

export default SearchBar