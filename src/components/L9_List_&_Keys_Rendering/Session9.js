import React from 'react'
import Produts from './Products'
import UserList from './UserList'
import ForOf from './ForOf'
import ReduceExample from './ReduceExample'
import ProductListing from './ProductListing'
import FilterAndMap from './FilterAndMap'
import FibonacciSequence from './FibonacciSequence'
import PalindromeChecker from './PalindromeChecker'

function Session9() {
    return (
        <div className=' text-center'>
            <UserList />
            <ReduceExample />
            <ProductListing />
            <FilterAndMap />
            <FibonacciSequence />
            <PalindromeChecker />
            <ForOf />
            <Produts />
        </div>
    )
}

export default Session9