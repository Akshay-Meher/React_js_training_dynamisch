import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => { setProducts(json); console.log(json); })
    }, [])

    return (
        <div>
            <div className=' flex flex-wrap'>
                {products?.map(product => (
                    <div key={product.id} className=' flex bg-yellow-600 border-2 m-4 p-4 flex-col w-1/6 rounded-lg'>
                        <h4 className=' text-center border-4 border-x-blue-900 bg-red-400'>{product.title}</h4>
                        <p className='text-center'>{product.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products