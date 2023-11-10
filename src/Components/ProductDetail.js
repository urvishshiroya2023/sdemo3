// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { PRODUCT_DATA } from '../Constants/Constants';

// const ProductDetail = () => {
//     const [products, setProducts] = useState(null); // Initialize with null or an empty object
//     const { id } = useParams();

//     useEffect(() => {
//         getProductData();
//     }, [id]);

//     async function getProductData() {
//         try {
//             const data = await fetch(PRODUCT_DATA + "/" + id);
//             const json = await data.json();
//             setProducts(json);
//             // console.log(json);
//         } catch (error) {
//             console.error("Error fetching product data:", error);
//         }
//     }

//     return (
//         <div className='container'>
//             <h2 className='fs-4'>Product Detail</h2>
//             {products ? (
//                 <div className='mt-5'>
//                     <p>Title : {products.title}</p>
//                     <p>Brand : {products.brand}</p>
//                     <p>Description : {products.description}</p>
//                     <p>Price : {products.price}/- only</p>
//                     <p>Discount : {products.discountPercentage} <span className='text-danger'>% off!</span> </p>
//                     <p>Category : {products.category}</p>
//                     <p>Stock : {products.stock} <span className='text-success'>left!!</span> </p>
//                     <div>
//                         <p>Product Images:</p>
//                         <div className='row justify-content-between'>
//                             {products.images.map((item, index) => (
//                                 <div className='col-3 mt-3'>
//                                     <img className='thumbimg' key={index} src={item} alt='productsubimage' />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default ProductDetail;

import React, { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCT_DATA } from '../Constants/Constants';

const ProductDetail = () => {
    const [products, setProducts] = useState(null);
    const { id } = useParams();

    const getProductData = useCallback(async () => {
        try {
            const data = await fetch(PRODUCT_DATA + "/" + id);
            const json = await data.json();
            setProducts(json);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    }, [id]);

    useMemo(() => {
        getProductData();
    }, [getProductData]);

    return (
        <div className='container'>
            <h2 className='fs-4'>Product Detail</h2>
            {products ? (
                <div className='mt-5'>
                    <p>Title : {products.title}</p>
                    <p>Brand : {products.brand}</p>
                    <p>Description : {products.description}</p>
                    <p>Price : {products.price}/- only</p>
                    <p>Discount : {products.discountPercentage} <span className='text-danger'>% off!</span> </p>
                    <p>Category : {products.category}</p>
                    <p>Stock : {products.stock} <span className='text-success'>left!!</span> </p>
                    <div>
                        <p>Product Images:</p>
                        <div className='row justify-content-between'>
                            {products.images.map((item, index) => (
                                <div className='col-3 mt-3' key={index}>
                                    <img className='thumbimg' src={item} alt='productsubimage' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetail;
