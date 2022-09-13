import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import CategoryFilter from '../home/CategoryFilter'
import InputSearch from '../home/InputSearch'
import PriceFilter from '../home/PriceFilter'
import home from './styles/home.css'

const Home = () => {

  const [inputSearch, setInputSearch] = useState('')
  const [filterProducts, setFilterProducts] = useState()
  const [objFilterPrice, setObjFilterPrice] = useState({})

  const products = useSelector (state => state.products)

  useEffect(() => {
    if(inputSearch.length !== 0){
    const filter = products?.filter(e => e.title.toLowerCase().includes(inputSearch.toLowerCase()))
    setFilterProducts(filter)
    } else {
      setFilterProducts('')
    }
  }, [inputSearch])

  useEffect(() => {
    const filter = products?.filter(e => {
      const price = NUmber(e.price)
      const max = objFilterPrice.to
      const min = objFilterPrice.from
      if(min && max) {
        return min <= price && price <= max
      } else if(min && !max) {
        return min <= price
      } else if(!min && max) {
        return price <= max
      } else {
        return true
      }  
    })
    setFilterProducts(filter)
  }, [objFilterPrice.to, objFilterPrice.from])

  return (
    <div className='home'>
      <h3>hola</h3>
      <h3>hola</h3>
      <h3>hola</h3>
      <InputSearch setInputSearch={setInputSearch} />
      <CategoryFilter />
      <PriceFilter setObjFilterPrice={setObjFilterPrice}/>
      <div className='home__container-card'>
        {
          filterProducts ?
          filterProducts?.map(product => (
            <CardHome 
              key={product.id}
              product={product}
            />
            ))
          :
          products?.map(product => (
            <CardHome 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home