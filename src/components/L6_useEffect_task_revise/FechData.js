import React, { useState, useEffect } from 'react';

function FetchData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Dummy Data</h1>
            <div style={style.ouerDiv}>
                {data.map(item => (
                    <div key={item.id} style={style.innerDiv}>
                        <h5>{item.title}</h5>
                        <img
                            src={item.image}
                            height={'250px'}
                            width={'200px'}
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FetchData;


const style = {
    ouerDiv: { display: "flex", flexWrap: "wrap", alignItems: 'center', justifyContent: "center", border: "2px solid black" },
    innerDiv: { border: "2px solid black", width: "300px", height: "400px", margin: "5px", padding: "5px", backgroundColor: "#87A922", borderRadius: "20px", overFlow: "hidden" },
}