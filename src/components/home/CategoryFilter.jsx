import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getAllProducts, getProductByCategory } from '../../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './styles/categoryFilter.css'

const CategoryFilter = () => {

  const [categories, setCategories] = useState()
  
  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))
  }, [])

  const dispatch = useDispatch()

  const handleClickCategory = id => {
    dispatch(getProductByCategory(id))
  }  

  const handleClickAllProducts = () => {
    dispatch(getAllProducts())
  }

  return (
    <div className='content-category'>
        <h3 className='content-title'>Category</h3>
        <ul className='content-ul'>
            <li className='content-item' onClick={handleClickAllProducts}>All Products</li>
            {
             categories?.map(category => (
                <li className='content-item' onClick={() => handleClickCategory(category.id)} key={category.id}>{category.name}</li>
             ))   
            }
        </ul>
    </div>
  )
}

export default CategoryFilter