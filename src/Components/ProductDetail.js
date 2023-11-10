import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCT_DATA } from '../Constants/Constants';

const ProductDetail = () => {
    const [products, setProducts] = useState(null); // Initialize with null or an empty object
    const { id } = useParams();

    useEffect(() => {
        getProductData();
    }, [id]);

    async function getProductData() {
        try {
            const data = await fetch(PRODUCT_DATA + "/" + id);
            const json = await data.json();
            setProducts(json);
            // console.log(json);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    }

    return (
        <div>
            {products ? (
                <div>
                    <p>Title : {products.title}</p>
                    <p>Brand : {products.brand}</p>
                    <p>Description : {products.description}</p>
                    <p>Price : {products.price}</p>
                    <p>Discount : {products.discountPercentage}</p>
                    <p>Category : {products.category}</p>
                    <p>Stock : {products.stock}</p>
                    <div>
                        <p>Product Images:</p>
                        {products.images.map((item, index) => (
                            <img key={index} src={item} alt='productsubimage' />
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetail;
