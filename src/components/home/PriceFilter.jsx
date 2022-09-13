import React from 'react'
import './styles/priceFilter.css'

const PriceFilter = ({setObjFilterPrice}) => {

    const submit = e => {
        e.prevent.default()
        const obj = {
            from: +e.target.fromPrice.value,
            to: +e.target.toPrice.value
        }
        setObjFilterPrice(obj)
    }

    return (
        <form onSubmit={submit}>
            <h3 className='content-title'>Price</h3>
            <ul className='content-ul'>
                <li className='filter-item'>
                    <label className='filter-label' htmlFor="fromPrice">From</label>
                    <input className='filter-input' type="number" id="fromPrice" />
                </li>
                <li>
                    <label className='filter-label' htmlFor="toPrice">To</label>
                    <input className='filter-input1' type="number" id="toPrice" />
                </li>
            </ul>
            <button className='filter-btn'>Filter Price</button>
        </form>
    )
}

export default PriceFilter