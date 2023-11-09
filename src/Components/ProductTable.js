import React from 'react'

const ProductTable = ({ item }) => {
    return (
        <div>
            <div>

                <tbody>
                    <th>{item.title}</th>
                    <th>{item.description}</th>
                    <th>{item.price}</th>
                    <th>{item.discountPercentage}</th>
                    <th>{item.rating}</th>
                    <th>{item.stock}</th>
                    <th>{item.brand}</th>
                    <th>{item.category}</th>
                    <th><img src={item.thumbnail} alt='productimg' /></th>
                </tbody>

            </div>
        </div>
    )
}

export default ProductTable