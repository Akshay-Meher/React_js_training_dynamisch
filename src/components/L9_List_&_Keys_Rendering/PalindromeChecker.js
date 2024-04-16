import React, { useState } from 'react';

const PalindromeChecker = () => {
    const [input, setInput] = useState('');
    const [isPalindrome, setIsPalindrome] = useState(false);

    const handleChange = (e) => {
        setInput(e.target.value);
        checkPalindrome();
    };

    const checkPalindrome = () => {
        const cleanInput = input.replace(/\W/g, '').toLowerCase();
        let reversed = '';

        for (let i = cleanInput.length - 1; i >= 0; i--) {
            reversed += cleanInput[i];
        }

        setIsPalindrome(cleanInput === reversed);
    };

    return (
        <div className=' border-4 border-black bg-lime-600 rounded-md m-4 p-4'>
            <h2>Palindrome Checker</h2>
            <input
                className=' text-black'
                type="text"
                value={input}
                placeholder='Enter a String...'
                onChange={handleChange}
            />
            <button
                className=' border-2 border-black m-1 p-1 bg-red-500 rounded-md'
                onClick={checkPalindrome}
            >Check
            </button>
            {isPalindrome && <p>"{input}" is a palindrome!</p>}
            {!isPalindrome && input && <p>"{input}" is not a palindrome.</p>}
        </div>
    );
};

export default PalindromeChecker;