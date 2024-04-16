import React, { useState } from 'react';

function HobbySelector() {
    const [selectedHobbies, setSelectedHobbies] = useState({
        swimming: false,
        dancing: false,
        trekking: false,
        traveling: false
    });

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        // console.log(value);
        // console.log(checked);
        setSelectedHobbies({ ...selectedHobbies, [value]: checked });
    };

    return (
        <div className=" m-9 p-10 bg-lime-400 text-center text-black rounded-lg">
            <h1>Select your Hobbies</h1>
            <form>
                <label>
                    <input type="checkbox" value="swimming" onChange={handleCheckboxChange} />
                    Swimming
                </label>
                <br />
                <label>
                    <input type="checkbox" value="dancing" onChange={handleCheckboxChange} />
                    Dancing
                </label>
                <br />
                <label>
                    <input type="checkbox" value="trekking" onChange={handleCheckboxChange} />
                    Trekking
                </label>
                <br />
                <label>
                    <input type="checkbox" value="traveling" onChange={handleCheckboxChange} />
                    Traveling
                </label>
                <br />
            </form>
            <div>
                <p>{JSON.stringify(selectedHobbies)}</p>
            </div>
        </div>
    );
}

export default HobbySelector;
