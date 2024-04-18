import React from 'react';

const NestedObjects = () => {
    const nestedData = {
        person1: {
            name: 'Akshay',
            age: 30,
        },
        person2: {
            name: 'Soham',
            age: 32,
        },
        person3: {
            name: 'Naman',
            age: 35,
        },
        person4: {
            name: 'Amey',
            age: 50,
        },

    };

    return (
        <div className=' border-4 border-black bg-lime-600 rounded-md m-4 p-4 flex '>
            <h1>Nested Object Data</h1>
            <NestedObjectTable data={nestedData} />
        </div>
    );
};

export default NestedObjects;



const NestedObjectTable = ({ data }) => {
    const renderTableData = () => {

        return Object.keys(data).map((key, index) => {
            const nestedData = data[key];
            console.log('nestedData', nestedData);
            return (
                <tr key={index}>
                    <td className=' border-4 border-black'>{key}</td>
                    <td className=' border-4 border-black'>{nestedData.name}</td>
                    <td className=' border-4 border-black'>{nestedData.age}</td>
                </tr>
            );
        });
    };

    return (
        <div >
            <h2>Nested Object Data Table</h2>
            <table className=' border-4 border-black'>
                <thead>
                    <tr>
                        <th className=' border-4 border-black'>Key</th>
                        <th className=' border-4 border-black'>Name</th>
                        <th className=' border-4 border-black'>Age</th>
                    </tr>
                </thead>
                <tbody className=' border-4 border-black'>{renderTableData()}</tbody>
            </table>
        </div>
    );
};
