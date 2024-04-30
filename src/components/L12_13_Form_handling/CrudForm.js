import React, { useState } from 'react'
import FormValidation1 from './FormValidation1'
import Table from './Table'

const initialData = [{
    name: "Satish Shelake",
    email: "Satish.doe@example.com",
    password: "Password123!",
    confirmPassword: "Password123!",
    bio: "I am a passionate developer with experience in various web technologies.",
    role: "developer",
    skills: {
        html: false,
        css: false,
        js: false,
        react: true,
        node: false,
        express: true
    },
    phoneNumber: "1234567890",
    gender: "male",
    resume: 'resume.pdf',
    date: null
},
{
    name: "Akshay meher",
    email: "Akshay.doe@example.com",
    password: "Password123!",
    confirmPassword: "Password123!",
    bio: "I am a passionate developer with experience in various web technologies.",
    role: "developer",
    skills: {
        html: false,
        css: false,
        js: false,
        react: true,
        node: true,
        express: true
    },
    phoneNumber: "8698474414",
    gender: "male",
    resume: 'resume.pdf',
    date: null
},
{
    name: "Rutuja Shinde",
    email: "Rutuja.doe@example.com",
    password: "Password123!",
    confirmPassword: "Password123!",
    bio: "I am a passionate developer with experience in various web technologies.",
    role: "developer",
    skills: {
        html: false,
        css: true,
        js: false,
        react: true,
        node: false,
        express: true
    },
    phoneNumber: "9589421058",
    gender: "female",
    resume: 'resume.pdf',
    date: '02-05-2000'
}

]

function CrudForm() {

    const [formData, setFormData] = useState(initialData);
    const [formDataState, setFormDataState] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        bio: '',
        role: '',
        skills: {
            html: false,
            css: false,
            js: false,
            react: false,
            node: false,
            express: false
        },
        phoneNumber: '',
        resume: null,
        gender: '',
        date: ''
    });



    //&    Handling Edit Logic....
    function handleEdit(user) {

        let filteredData = formData.filter((data) => data != user);
        setFormData(filteredData);
        setFormDataState(user);

    }

    //&   Handling Delete Logic....
    function handleDelete(user) {
        let val = window.confirm('Confirm Delete...');
        // console.log(val);
        if (!val) {
            return;
        }
        let filteredData = formData.filter((data) => data != user);
        setFormData(filteredData);
    }

    //&   Sorting data based on input....
    function sortData(key, order) {
        // Copying the initialData array to prevent mutation
        const sortedData = [...formData];

        sortedData.sort((a, b) => {
            let valueA;
            let valueB;
            if (key !== 'phone number') {
                valueA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
                valueB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
            }

            if (order === 'asc') {
                return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
            } else if (order === 'desc') {
                return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
            }
        });

        setFormData(sortedData);
    }

    return (
        <div>
            <FormValidation1
                setFormData={setFormData}
                formDataState={formDataState}
                setFormDataState={setFormDataState}
            />

            <Table
                formData={formData}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                sortData={sortData}
            />
        </div>
    )
}

export default CrudForm