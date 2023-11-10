// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { PRODUCT_DATA } from '../Constants/Constants';
// import ProductTable from './ProductTable';

// const Products = () => {
//     const [allProducts, setAllProducts] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [sortType, setSortType] = useState(null);

//     useEffect(() => {
//         getProducts();
//     }, []);

//     async function getProducts() {
//         const data = await fetch(PRODUCT_DATA);
//         const json = await data.json();
//         setAllProducts(json.products);
//     }

//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const filteredProducts = allProducts.filter((product) =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const handleSort = (type) => {
//         let sortedProducts = [...allProducts];
//         if (type === 'title') {
//             sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
//         } else if (type === 'price') {
//             sortedProducts.sort((a, b) => a.price - b.price);
//         }
//         setSortType(type);
//         setAllProducts(sortedProducts);
//     };

//     return (
//         <div>
//             <div className='container'>
//                 <div className='d-flex justify-content-between'>

//                     <input
//                         type="text"
//                         placeholder="Search your products"
//                         value={searchTerm}
//                         onChange={handleSearch}
//                     />
//                     <select onChange={(e) => handleSort(e.target.value)}>
//                         <option value="">Sort By</option>
//                         <option value="title">Title</option>
//                         <option value="price">Price</option>
//                     </select>
//                 </div>


//                 <div className='mt-3'>
//                     <div className='row'>
//                         <div className="col-1 text-center fs-5">Title</div>
//                         <div className="col-2 text-center fs-5">Description</div>
//                         <div className="col-1 text-center fs-5">Price</div>
//                         <div className="col-1 text-center fs-5">Discount</div>
//                         <div className="col-1 text-center fs-5">Rating</div>
//                         <div className="col-1 text-center fs-5">Stock</div>
//                         <div className="col-1 text-center fs-5">Brand</div>
//                         <div className="col-1 text-center fs-5">Category</div>
//                         <div className="col-3 text-center fs-5">Image</div>
//                     </div>

//                     <div className='mt-3 mb-5' >
//                         {filteredProducts.map((item) => (
//                             <Link className='text-decoration-none' to={`/products/${item.id}`} key={item.id}>
//                                 <ProductTable item={item} />
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Products;


import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_DATA } from '../Constants/Constants';
import ProductTable from './ProductTable';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState(null);

    const getProducts = useCallback(async () => {
        try {
            const data = await fetch(PRODUCT_DATA);
            const json = await data.json();
            setAllProducts(json.products);
        } catch (error) {
            console.log(error)
        }
    }, []);

    const handleSearch = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    useMemo(() => {
        getProducts();
    }, [getProducts]);

    const filteredProducts = useMemo(() => {
        return allProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [allProducts, searchTerm]);

    const handleSort = useCallback((type) => {
        let sortedProducts = [...allProducts];
        if (type === 'title') {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (type === 'price') {
            sortedProducts.sort((a, b) => a.price - b.price);
        }
        setSortType(type);
        setAllProducts(sortedProducts);
    }, [allProducts]);

    return (
        <div>
            <div className='container'>
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


                <div className='mt-3'>
                    <div className='row'>
                        <div className="col-1 text-center fs-5">Title</div>
                        <div className="col-2 text-center fs-5">Description</div>
                        <div className="col-1 text-center fs-5">Price</div>
                        <div className="col-1 text-center fs-5">Discount</div>
                        <div className="col-1 text-center fs-5">Rating</div>
                        <div className="col-1 text-center fs-5">Stock</div>
                        <div className="col-1 text-center fs-5">Brand</div>
                        <div className="col-1 text-center fs-5">Category</div>
                        <div className="col-3 text-center fs-5">Image</div>
                    </div>

                    <div className='mt-3 mb-5' >
                        {filteredProducts.map((item) => (
                            <Link className='text-decoration-none' to={`/products/${item.id}`} key={item.id}>
                                <ProductTable item={item} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
