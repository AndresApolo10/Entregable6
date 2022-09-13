import React from 'react'
import './styles/inputSearch.css'

const InputSearch = ({setInputSearch}) => {
  
  const handleChange = e => {
    setInputSearch(e.target.value.trim());
  }
  
  return (
    <div>
        <input className='search' onChange={handleChange} placeholder=" What are you looking for?" type="text" />
    </div>
  )
}

export default InputSearch