import React from 'react'

const ProductTable = ({ item }) => {
    return (
        <tbody>
            <tr>
                <th>{item.title}</th>
                <th>{item.description}</th>
                <th>{item.price}</th>
                <th>{item.discountPercentage}</th>
                <th>{item.rating}</th>
                <th>{item.stock}</th>
                <th>{item.brand}</th>
                <th>{item.category}</th>
                <th><img src={item.thumbnail} alt='productimg' /></th>
            </tr>

        </tbody>
    )
}

export default ProductTable