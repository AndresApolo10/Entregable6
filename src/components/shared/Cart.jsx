import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCartInfo from '../cart/ProductCartInfo'

const Cart = () => {

  const [cartProducts, setCartProducts] = useState()

  useEffect(() => {

    const config = {
        headers: {
            Authorization: `Bearer${localStorage.getItem('token')}`
        }
    }

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
  }, [])  

  return (
    <section className='cart'>
        <h2 className='cart__title'>Cart</h2>
        <ProductCartInfo />
        <hr className='cart__hr'/>
        <footer className='cart__footer'>
            <span className='cart__total-global-label'>Total:</span>
            <p className='cart__total-global-value'>1350</p>
            <button className='cart__btn'>Checkout</button>
        </footer>
    </section>
  )
}

export default Cart