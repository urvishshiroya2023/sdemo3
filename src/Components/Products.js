import React, { useEffect, useState } from 'react';
import { PRODUCT_DATA } from '../Constants/Constants';
import ProductTable from './ProductTable';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const data = await fetch(PRODUCT_DATA);
        const json = await data.json();
        setAllProducts(json.products);
        console.log(json);
    }

    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount Percentage</th>
                            <th>Rating</th>
                            <th>Stock</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    {

                        allProducts.map((item) => {
                            return (

                                <ProductTable item={item} />


                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Products