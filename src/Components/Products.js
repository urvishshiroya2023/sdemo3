import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_DATA } from '../Constants/Constants';
import ProductTable from './ProductTable';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState(null);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const data = await fetch(PRODUCT_DATA);
        const json = await data.json();
        setAllProducts(json.products);
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSort = (type) => {
        let sortedProducts = [...allProducts];
        if (type === 'title') {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (type === 'price') {
            sortedProducts.sort((a, b) => a.price - b.price);
        }
        setSortType(type);
        setAllProducts(sortedProducts);
    };

    return (
        <div>
            <div>
                <div className='d-flex justify-content-between'>

                    <input
                        type="text"
                        placeholder="Search your products"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <select onChange={(e) => handleSort(e.target.value)}>
                        <option value="">Sort By</option>
                        <option value="title">Title</option>
                        <option value="price">Price</option>
                    </select>
                </div>

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
                    <tbody>
                        {filteredProducts.map((item) => (
                            <Link to={`/products/${item.id}`} key={item.id}>
                                <ProductTable item={item} />
                            </Link>
                        ))}
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default Products;
