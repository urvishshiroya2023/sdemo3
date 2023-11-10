import React from 'react';

const ProductTable = ({ item }) => {
    return (
        <div className="row mt-3 align-items-center text-black">
            <div className="col-1 text-center">{item?.title}</div>
            <div className="col-2 text-center">{item?.description}</div>
            <div className="col-1 text-center">{item?.price}</div>
            <div className="col-1 text-center">{item?.discountPercentage}</div>
            <div className="col-1 text-center">{item?.rating}</div>
            <div className="col-1 text-center">{item?.stock}</div>
            <div className="col-1 text-center">{item?.brand}</div>
            <div className="col-1 text-center">{item?.category}</div>
            <div className="col-3 text-center"><img className='thumbimg rounded' src={item?.thumbnail} alt='productimg' /></div>
        </div>
    )
}

export default ProductTable;