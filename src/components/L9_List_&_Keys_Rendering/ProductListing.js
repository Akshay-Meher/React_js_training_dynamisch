import React from 'react';

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 9.99,
        category: { name: 'Electronics', id: 1 },
    },
    {
        id: 2,
        name: 'Product 2',
        price: 14.99,
        category: { name: 'Clothing', id: 2 },
    },
    {
        id: 3,
        name: 'Product 3',
        price: 19.99,
        category: null,
    },
    {
        id: 4,
        name: 'Product 4',
        price: 139.99,
        category: { name: 'Clothing', id: 2 },
    },
    {
        id: 5,
        name: 'Product 5',
        price: 789.99,
        category: null,
    },
];

const ProductListing = () => (
    <div className=' border-4 border-black bg-lime-600 rounded-md m-4 p-4'>
        <h2>Product Listing</h2>
        <ul className=' flex flex-wrap'>
            {products.map((product) => (
                <li key={product.id} className='border-2 border-black m-1 p-1 bg-red-500 rounded-md'>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>
                        Category: {product.category?.name ?? 'Uncategorized'} (
                        {product.category?.id ?? 'N/A'})
                    </p>
                </li>
            ))}
        </ul>
    </div>
);

export default ProductListing;