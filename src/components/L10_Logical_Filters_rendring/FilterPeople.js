import React, { useEffect, useState } from 'react'
import data from './data';

function FilterPeople({ setPeoples, peoples }) {

    const [selecetedOption, setSelectedOption] = useState({
        name: '',
        age: '',
        education: '',
        salary: '',
        city: '',
        weight: '',
        gender: 'male'
    });
    const uniqueNames = [...new Set(peoples.map(item => item.name))];
    const uniqueAges = [...new Set(peoples.map(item => item.age))];
    const uniqueEducations = [...new Set(peoples.map(item => item.education))];
    const uniqueSalaries = [...new Set(peoples.map(item => item.salary))];
    const uniqueCity = [...new Set(peoples.map(item => item.city))];
    const uniqueWeight = [...new Set(peoples.map(item => item.weight))];

    useEffect(() => {

        const res = data.filter(people => {
            if (selecetedOption.name != '') {
                return people.name === selecetedOption.name
            }
            return true;
        }).filter(people => {
            if (selecetedOption.age != '')
                return people.age == selecetedOption.age
            return true
        }).filter(people => {
            if (selecetedOption.education != '')
                return people.education == selecetedOption.education
            return true
        }).filter(people => {
            if (selecetedOption.salary != '')
                return people.salary == selecetedOption.salary
            return true
        }).filter(people => {
            if (selecetedOption.city != '')
                return people.city == selecetedOption.city
            return true
        }).filter(people => {
            if (selecetedOption.weight != '')
                return people.weight == selecetedOption.weight
            return true
        }).filter(people => {
            if (selecetedOption.gender != '')
                return people.gender == selecetedOption.gender
            return true
        })


        console.log('res');
        console.log(res);
        console.log('res1');
        // console.log(res1);
        setPeoples(res);
    }, [selecetedOption]);


    function handleName(e) {
        let val = e.target.value;
        setSelectedOption(prev => ({
            ...prev,
            name: val
        }))
        console.log(val)
    }
    function handleAge(e) {
        let val = e.target.value;
        setSelectedOption(prev => ({
            ...prev,
            age: val
        }))
        console.log(val)
    }
    function handleEducation(e) {
        let val = e.target.value;
        setSelectedOption(prev => ({
            ...prev,
            education: val
        }))
        console.log(val)
    }
    function handleSalary(e) {
        let val = e.target.value;
        setSelectedOption(prev => ({
            ...prev,
            salary: val
        }))
        console.log(val)
    }
    function handleCity(e) {
        let val = e.target.value;
        setSelectedOption(prev => ({
            ...prev,
            city: val
        }))
        console.log(val)
    }
    function handleWeight(e) {
        let val = e.target.value;
        setSelectedOption(prev => ({
            ...prev,
            weight: val
        }))
        console.log(val)
    }
    function handleGenderChange(e) {
        let val = e.target.value;
        setSelectedOption(prev => ({
            ...prev,
            gender: val
        }))
        console.log(val)
    }


    return (
        <div className=' flex bg-sky-800 flex-wrap'>
            <div className='m-4 p-4'>
                <label htmlFor="">Select name:
                    <select
                        value={selecetedOption.name}
                        className=' text-black'
                        onChange={e => handleName(e)}
                    >
                        <option value={''} defaultValue> Select Name</option>
                        {
                            uniqueNames.map((peopleName, index) => (

                                <option
                                    value={peopleName}
                                    key={index}
                                >
                                    {peopleName}
                                </option>
                            ))
                        }

                    </select>
                </label>
            </div>
            <div className='m-4 p-4'>
                <label htmlFor="">Select Age:
                    <select
                        value={selecetedOption.age}
                        className=' text-black'
                        onChange={e => handleAge(e)}
                    >

                        <option value={''} defaultValue >Select Age</option>
                        {
                            uniqueAges.map((peopleAge, index) => (
                                <option
                                    value={peopleAge}
                                    key={index}
                                >
                                    {peopleAge}
                                </option>
                            ))
                        }

                    </select>
                </label>
            </div>
            <div className='m-4 p-4'>
                <label htmlFor="">Select educationOption:
                    <select
                        value={selecetedOption.education}
                        className=' text-black'
                        onChange={e => handleEducation(e)}
                    >

                        <option value={''} defaultValue >Select Edu</option>
                        {
                            uniqueEducations.map((peopleEducations, index) => (
                                <option
                                    value={peopleEducations}
                                    key={index}
                                >
                                    {peopleEducations}
                                </option>
                            ))
                        }

                    </select>
                </label>
            </div>
            <div className='m-4 p-4'>
                <label htmlFor="">Select salary:
                    <select
                        value={selecetedOption.salary}
                        className=' text-black'
                        onChange={e => handleSalary(e)}
                    >

                        <option value={''} defaultValue >Select salary</option>
                        {
                            uniqueSalaries.map((peoplesalary, index) => (
                                <option
                                    value={peoplesalary}
                                    key={index}
                                >
                                    {peoplesalary}
                                </option>
                            ))
                        }

                    </select>
                </label>
            </div>
            <div className='m-4 p-4'>
                <label htmlFor="">Select City:
                    <select
                        value={selecetedOption.city}
                        className=' text-black'
                        onChange={e => handleCity(e)}
                    >

                        <option value={''} defaultValue >Select City</option>
                        {
                            uniqueCity.map((peopleCity, index) => (
                                <option
                                    value={peopleCity}
                                    key={index}
                                >
                                    {peopleCity}
                                </option>
                            ))
                        }

                    </select>
                </label>
            </div>

            <div className='m-4 p-4'>
                <label htmlFor="">Select Weight:
                    <select
                        value={selecetedOption.weight}
                        className=' text-black'
                        onChange={e => handleWeight(e)}
                    >


                        <option value={''} defaultValue >Select Weight</option>

                        {
                            uniqueWeight.map((peopleWeight, index) => (
                                <option
                                    value={peopleWeight}
                                    key={index}
                                >
                                    {peopleWeight}
                                </option>
                            ))
                        }

                    </select>
                </label>
            </div>

            <div className='m-4 p-4'>
                <label>
                    <input
                        type="radio"
                        value="male"
                        checked={selecetedOption.gender === 'male'}
                        onChange={handleGenderChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        value="female"
                        checked={selecetedOption.gender === 'female'}
                        onChange={handleGenderChange}
                    />
                    Female
                </label>
            </div>
        </div>
    )
}

export default FilterPeople;
