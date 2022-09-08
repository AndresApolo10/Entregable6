import React from 'react'
import './styles/productPurchase.css'

const ProductPurchase = ({product}) => {
  return (
    <li className='card-purchase__item'>
        <div>
        <h4 className='card-purchase__name'>{product.title}</h4>
        </div>
        <div className='card-quantity'>
        <span className='card-purchase__quantity'>{product.productsInCart.quantity}</span>
        </div>
        <div className='card-price'>
        <span className='card-purchase__price'>{product.price}</span>
        </div>
    </li>
  )
}

export default ProductPurchase