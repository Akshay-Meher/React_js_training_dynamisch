import React, { useState } from 'react';

const UserForm = ({ setUsers }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsers(prev => [...prev, { id, name, address: { city, country } }]);
        console.log({ id, name, address: { city, country } });
        setId('');
        setName('');
        setCity('');
        setCountry('');
    };

    return (
        <form onSubmit={handleSubmit} className=' flex flex-col gap-2 justify-center align-center border-4 border-black m-4 p-4 bg-orange-300 w-1/4 rounded-lg'>
            <div className=''>
                <label htmlFor="id">ID:</label>
                <input
                    id="id"
                    type="text"
                    placeholder='id'
                    value={id}
                    className=' text-black'
                    onChange={(event) => setId(event.target.value)}
                />
            </div>
            <div className=' w-30'>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    placeholder='name'
                    value={name}
                    className=' text-black'
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className=' w-30'>
                <label htmlFor="city">City:</label>
                <input
                    id="city"
                    type="text"
                    placeholder='city'
                    value={city}
                    className=' text-black'
                    onChange={(event) => setCity(event.target.value)}
                />
            </div>
            <div className=' w-30'>
                <label htmlFor="country">Country:</label>
                <input
                    id="country"
                    type="text"
                    placeholder='country'
                    className=' text-black'
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                />
            </div>
            <button className=' border-2 bg-red-500 p-1 m-1 rounded-md' type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
