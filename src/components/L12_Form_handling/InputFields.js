import React, { useState } from 'react';

const InputFields = () => {
    const [inputValues, setInputValues] = useState({
        button: '',
        checkbox: false,
        color: '#000000',
        date: '',
        datetime: '',
        email: '',
        file: null,
        hidden: '',
        image: '',
        month: '',
        number: 0,
        password: '',
        radio: '',
        range: 0,
        reset: '',
        search: '',
        submit: '',
        tel: '',
        text: '',
        time: '',
        url: '',
        week: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
        }));
    };

    return (
        <div className="flex  items-center p-4 space-y-4 text-black flex-wrap gap-2 bg-yellow-50 m-4 p-4 rounded-lg">
            <div className="flex space-x-4 border-1 border-black m-1">
                <input
                    type="button"
                    name="button"
                    value="Button"
                    onChange={handleChange}
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                />
                <input
                    type="checkbox"
                    name="checkbox"
                    checked={inputValues.checkbox}
                    onChange={handleChange}
                    className="form-checkbox"
                />
                <input
                    type="color"
                    name="color"
                    value={inputValues.color}
                    onChange={handleChange}
                    className="form-color"
                />
            </div>

            <div className="flex space-x-4 border-1 border-black m-1">
                <input
                    type="date"
                    name="date"
                    value={inputValues.date}
                    onChange={handleChange}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="datetime-local"
                    name="datetime"
                    value={inputValues.datetime}
                    onChange={handleChange}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    name="email"
                    value={inputValues.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="px-4 py-2 border border-gray-300 rounded"
                />
            </div>

            <div className="flex space-x-4 border-1 border-black m-1">
                <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="hidden"
                    name="hidden"
                    value={inputValues.hidden}
                    onChange={handleChange}
                />
                <input
                    type="image"
                    name="image"
                    src={inputValues.image}
                    onChange={handleChange}
                    className="w-12 h-12"
                />
            </div>

            <div className="flex space-x-4 border-1 border-black m-1">
                <input
                    type="month"
                    name="month"
                    value={inputValues.month}
                    onChange={handleChange}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="number"
                    value={inputValues.number}
                    onChange={handleChange}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    name="password"
                    value={inputValues.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="px-4 py-2 border border-gray-300 rounded"
                />
            </div>

            <div className="flex space-x-4 border-1 border-black m-1">
                <input
                    type="radio"
                    name="radio"
                    value={inputValues.radio}
                    onChange={handleChange}
                    className="form-radio"
                />
                <input
                    type="range"
                    name="range"
                    value={inputValues.range}
                    onChange={handleChange}
                    className="form-range"
                />
                <input
                    type="reset"
                    name="reset"
                    value="Reset"
                    onChange={handleChange}
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                />
            </div>

            <div className="flex space-x-4 border-1 border-black m-1">
                <input
                    type="search"
                    name="search"
                    value={inputValues.search}
                    onChange={handleChange}
                    placeholder="Search"
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="submit"
                    name="submit"
                    value="Submit"
                    onChange={handleChange}
                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                />
                <input
                    type="tel"
                    name="tel"
                    value={inputValues.tel}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="px-4 py-2 border border-gray-300 rounded"
                />
            </div>

            <div className="flex space-x-4 border-1 border-black m-1">
                <input
                    type="text"
                    name="text"
                    value={inputValues.text}
                    onChange={handleChange}
                    placeholder="Text"
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="time"
                    name="time"
                    value={inputValues.time}
                    onChange={handleChange}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="url"
                    name="url"
                    value={inputValues.url}
                    onChange={handleChange}
                    placeholder="URL"
                    className="px-4 py-2 border border-gray-300 rounded"
                />
            </div>

            <input
                type="week"
                name="week"
                value={inputValues.week}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded"
            />

            {/* Display the input values */}
            <pre className="p-4 bg-gray-100 rounded">
                <code>
                    <table className="border-collapse border border-gray-400">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border border-gray-400">Key</th>
                                <th className="px-4 py-2 border border-gray-400">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(inputValues).map(([key, value]) => (
                                <tr key={key}>
                                    <td className="px-4 py-2 border border-gray-400">{key}</td>
                                    <td className="px-4 py-2 border border-gray-400">
                                        {typeof value === 'object' ? JSON.stringify(value) : value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </code>
            </pre>
        </div>
    );
};

export default InputFields;