import React from 'react'

const ProductTable = ({ item }) => {
    return (
        // <tbody>
        //     <tr>
        //         <th>{item.title}</th>
        //         <th>{item.description}</th>
        //         <th>{item.price}</th>
        //         <th>{item.discountPercentage}</th>
        //         <th>{item.rating}</th>
        //         <th>{item.stock}</th>
        //         <th>{item.brand}</th>
        //         <th>{item.category}</th>
        //         <th><img src={item.thumbnail} alt='productimg' /></th>
        //     </tr>

        // </tbody>
        <div class="row mt-3">
            <div class="col-1">{item.title}</div>
            <div class="col-1">{item.description}</div>
            <div class="col-1">{item.price}</div>
            <div class="col-1">{item.discountPercentage}</div>
            <div class="col-1">{item.rating}</div>
            <div class="col-1">{item.stock}</div>
            <div class="col-1">{item.brand}</div>
            <div class="col-1">{item.category}</div>
            <div class="col-4"><img className='img-fluid' src={item.thumbnail} alt='productimg' /></div>
        </div>

    )
}

export default ProductTable