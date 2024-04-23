import React, { useState } from 'react'


const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;


function FormValidation() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [bio, setBio] = useState('');
    const [role, setRole] = useState('');
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
        bio: false,
        role: false
    });

    // const [formData, setFormData] = useState()



    // setting Name input
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);

        // const nameRegex = /^[a-zA-Z\s]+$/;

        if (!nameRegex.test(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: 'Name should only contain letters and spaces.'
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: ''
            }));
        }
    };


    // setting Email input
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address.'
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: ''
            }));
        }
    };


    // setting Passward input
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        setPassword(value);

        if (!passwordRegex.test(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: ''
            }));
        }
    };


    // setting confirm-Passward input
    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        if (value !== password) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: 'Passwords do not match.'
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: ''
            }));
        }
    };

    // setting Bio input
    const handleBioChange = (e) => {
        const value = e.target.value;
        setBio(value.trim());
        if (value.length === 0) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                bio: 'Bio cannot be empty.'
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                bio: ''
            }));
        }
    };

    // setting Role 
    const handleRoleChange = (e) => {
        const value = e.target.value;
        setRole(value);
        if (value === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                role: 'Please select a role.'
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                role: ''
            }));
        }
    };


    // form submit logic
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form before submission
        if (validateForm()) {
            // Submit the form
            alert(`
                Form submited Successfully
                name: ${name},
                email:  ${email},
                password:  ${password},
                confirmPassword:  ${confirmPassword},
                bio:  ${bio},
                role:  ${role},
           `)

        }
    };

    // final form validation
    const validateForm = () => {
        let isValid = true;
        // console.log('name', name);

        if (name.trim() == '') {
            // console.log('name', name);
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: 'Name is Required.'
            }));
            isValid = false;
        }



        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address.'
            }));
            isValid = false;
        }

        if (!password) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password is required.'
            }));
            isValid = false;
        }

        if (confirmPassword !== password) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: 'Passwords do not match.'
            }));
            isValid = false;
        }

        if (bio.length === 0) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                bio: 'Bio cannot be empty.'
            }));
            isValid = false;
        }

        if (role === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                role: 'Please select a role.'
            }));
            isValid = false;
        }

        if (errors.name || errors.email || errors.password || errors.confirmPassword || errors.bio || errors.role) {
            isValid = false;
        }

        return isValid;
    };

    return (
        <div className=" text-black m-5 w-100 w-100 ">
            <form
                className=" w-full bg-cyan-300 shadow-md rounded p-20 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Name
                    </label>
                    <input
                        value={name}
                        onChange={handleNameChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Name"
                    />
                    {errors.name && <p className="text-red-500 text-s italic">{errors.name}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        value={email}
                        onChange={handleEmailChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                    />
                    {errors.email && <p className="text-red-500 text-s italic">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={handlePasswordChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                    {errors.password && <span className="text-red-500 text-s italic">{errors.password}</span>}
                </div>
                {/* Confirm Password Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                        Confirm Password
                    </label>
                    <input
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-s italic">{errors.confirmPassword}</p>}

                </div>
                {/* Bio Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                        Bio
                    </label>
                    <textarea
                        value={bio}
                        onChange={handleBioChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="bio"
                        placeholder="Tell us about yourself"
                    />
                    {errors.bio && <p className="text-red-500 text-s italic">{errors.bio}</p>}
                </div>
                {/* Role Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                        Role
                    </label>
                    <select
                        value={role}
                        onChange={handleRoleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="role"
                    >
                        <option value="">Select a role</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="project-manager">Project Manager</option>
                    </select>
                    {errors.role && <p className="text-red-500 text-s italic">{errors.role}</p>}

                    {
                        <p>-----------------------------------------</p>
                    }
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2" type="submit">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormValidation;
