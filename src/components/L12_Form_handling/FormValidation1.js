import React, { useState } from 'react';
import './FormValidation1.css';

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

const initialErrors = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
    role: '',
    skills: '',
    phoneNumber: '',
    resume: '',
    gender: '',
    date: ''
};

function FormValidation1({ setFormData, formDataState, setFormDataState }) {

    const [errors, setErrors] = useState(initialErrors);


    //& This function runs every input feild
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
        // console.log(newValue.type);

        if (name === 'password' || name === 'confirmPassword') {
            setFormDataState((prevData) => ({
                ...prevData,
                [name]: newValue
            }));
            validatePassword(value, name === 'confirmPassword' ? formDataState.password : value);
        } else if (type == 'date') {
            const selected = new Date(value);
            const today = new Date();
            if (selected > today) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    date: 'Please select a date in the past or today.'
                }));
            } else {
                // setSelectedDate(event.target.value);
                // setError('');

                setFormDataState((prevData) => ({
                    ...prevData,
                    [name]: value
                }));

                setErrors((prevErrors) => ({
                    ...prevErrors,
                    date: ''
                }));
            }

        } else {
            setFormDataState((prevData) => ({
                ...prevData,
                [name]: newValue
            }));
            validateField(name, newValue);
        }
    };

    //& This function validate Password
    const validatePassword = (password, confirmPassword) => {
        if (!passwordRegex.test(password)) {
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

        if (confirmPassword && password !== confirmPassword) {
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

    //& This function validate other input fields
    const validateField = (name, value) => {
        let errorMessage = '';
        switch (name) {
            case 'name':
                errorMessage = !nameRegex.test(value.trim()) ? 'Name should only contain letters and spaces.' : '';
                break;
            case 'email':
                errorMessage = !emailRegex.test(value) ? 'Invalid email address.' : '';
                break;
            case 'bio':
                errorMessage = value.trim().length === 0 ? 'Bio cannot be empty.' : '';
                break;
            case 'role':
                errorMessage = value === '' ? 'Please select a role.' : '';
                break;
            case 'phoneNumber':
                errorMessage = !/^\d{10}$/.test(value) ? 'Phone number must be 10 digits long.' : '';
                break;
            case 'resume':
                errorMessage =
                    value && !['application/pdf', 'application/msword', 'image/jpeg'].includes(value.type)
                        ? 'Invalid file type. Only PDF, DOC, jpeg  files are allowed.'
                        : '';
                break;
            case 'gender':
                errorMessage = value === '' ? 'Please select a gender.' : '';
                break;
            case 'date':
                errorMessage = value === '' ? 'BOD is reqiured' : '';
                break;
            case 'passward':
                errorMessage = value === '' ? 'passward is reqiured' : '';
                break;

            default:
                break;
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage
        }));
    };

    //& This function validate other checkboxes fo  skills
    const handleSkillsChange = (skill) => {
        setFormDataState((prevData) => ({
            ...prevData,
            skills: {
                ...prevData.skills,
                [skill]: !prevData.skills[skill]
            }
        }));
    };


    //& This function run onSubmit of form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setFormData((prev) => [...prev, formDataState]);
            setFormDataState({
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
            setErrors(initialErrors);
        }
    };

    //& This function validate all  input fields before submitting form
    const validateForm = () => {
        let isValid = true;
        for (const key in formDataState) {
            if (key === 'skills') {
                if (Object.values(formDataState.skills).filter((skill) => skill).length === 0) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        skills: 'Please select at least one skill.'
                    }));
                    isValid = false;
                }
            } else if (key === 'password') {
                if (!formDataState.password)
                    setErrors(prev => ({
                        ...prev,
                        'password': 'passward is reqiured.'
                    }))
            } else {
                validateField(key, formDataState[key]);
                if (errors[key]) {
                    isValid = false;
                }
            }
        }
        return isValid;
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input
                        value={formDataState.name}
                        onChange={handleChange}
                        name="name"
                        id="username"
                        type="text"
                        placeholder="Name"
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        value={formDataState.email}
                        onChange={handleChange}
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        value={formDataState.password}
                        onChange={handleChange}
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        value={formDataState.confirmPassword}
                        onChange={handleChange}
                        name="confirmPassword"
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        value={formDataState.bio}
                        onChange={handleChange}
                        name="bio"
                        id="bio"
                        placeholder="Tell us about yourself"
                    />
                    {errors.bio && <p className="error">{errors.bio}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select
                        value={formDataState.role}
                        onChange={handleChange}
                        name="role"
                        id="role"
                    >
                        <option value="">Select a role</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="project-manager">Project Manager</option>
                    </select>
                    {errors.role && <p className="error">{errors.role}</p>}
                </div>

                <div className="form-group">
                    <label>Skills</label>
                    <div>
                        {Object.keys(formDataState.skills).map((skill, index) => (
                            <label key={index}>
                                <input
                                    className='form-input'
                                    type="checkbox"
                                    checked={formDataState.skills[skill]}
                                    onChange={() => handleSkillsChange(skill)}
                                /> {skill}
                            </label>
                        ))}
                    </div>
                    {errors.skills && <p className="error">{errors.skills}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        value={formDataState.phoneNumber}
                        onChange={handleChange}
                        name="phoneNumber"
                        id="phone"
                        type="tel"
                        placeholder="Tel-Phone Number"
                    />
                    {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="resume">Upload Resume</label>
                    <input
                        className='form-input'
                        type="file"
                        id="resume"
                        accept=".pdf,.doc,.docx,.jpg"
                        onChange={handleChange}
                        name="resume"
                    />
                    {errors.resume && <p className="error">{errors.resume}</p>}
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <div>
                        <label>
                            <input
                                className='form-input'
                                type="radio"
                                value="male"
                                checked={formDataState.gender === 'male'}
                                onChange={handleChange}
                                name="gender"
                            /> Male
                        </label>
                        <label>
                            <input
                                className='form-input'
                                type="radio"
                                value="female"
                                checked={formDataState.gender === 'female'}
                                onChange={handleChange}
                                name="gender"
                            /> Female
                        </label>
                        <label>
                            <input
                                className='form-input'
                                type="radio"
                                value="other"
                                checked={formDataState.gender === 'other'}
                                onChange={handleChange}
                                name="gender"
                            /> Other
                        </label>



                    </div>
                    {errors.gender && <p className="error">{errors.gender}</p>}
                </div>
                <div className="form-group">
                    <label>BOD:</label>
                    <div>
                        <label>
                            <input
                                className='form-input'
                                type="date"
                                value={formDataState.date}
                                onChange={handleChange}
                                name="date"
                            />
                        </label>

                    </div>
                    {errors.date && <p className="error">{errors.date}</p>}
                </div>

                <button type="submit" className='btn-sing-up'>Add User</button>
            </form>
        </div>
    );

}

export default FormValidation1;














// import { useState } from 'react';
// import './FormValidation1.css'
// // import From from './From';

// const nameRegex = /^[a-zA-Z\s]+$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

// function FormValidation1({ setFormData }) {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [bio, setBio] = useState('');
//     const [role, setRole] = useState('');
//     const [skills, setSkills] = useState({
//         html: false,
//         css: false,
//         js: false,
//         react: false,
//         node: false,
//         express: false
//     });
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [resume, setResume] = useState(null);
//     const [gender, setGender] = useState('');
//     const [errors, setErrors] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         bio: '',
//         role: '',
//         skills: '',
//         phoneNumber: '',
//         resume: '',
//         gender: ''
//     });

//     const handleNameChange = (e) => {
//         const value = e.target.value;
//         setName(value);

//         if (!nameRegex.test(value)) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 name: 'Name should only contain letters and spaces.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 name: ''
//             }));
//         }
//     };

//     const handleEmailChange = (e) => {
//         const value = e.target.value;
//         setEmail(value.trim());

//         if (!emailRegex.test(value)) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 email: 'Invalid email address.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 email: ''
//             }));
//         }
//     };

//     const handlePasswordChange = (e) => {
//         const value = e.target.value;
//         setPassword(value.trim());

//         if (!passwordRegex.test(value)) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 password: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 password: ''
//             }));
//         }
//     };

//     const handleConfirmPasswordChange = (e) => {
//         const value = e.target.value;
//         setConfirmPassword(value.trim());

//         if (value !== password) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 confirmPassword: 'Passwords do not match.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 confirmPassword: ''
//             }));
//         }
//     };

//     const handleBioChange = (e) => {
//         const value = e.target.value;
//         setBio(value.trim());

//         if (value.length === 0) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 bio: 'Bio cannot be empty.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 bio: ''
//             }));
//         }
//     };

//     const handleRoleChange = (e) => {
//         const value = e.target.value;
//         setRole(value);

//         if (value === '') {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 role: 'Please select a role.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 role: ''
//             }));
//         }
//     };

//     const handleSkillsChange = (skill) => {


//         if (Object.values(skills).filter(skill => skill).length === 0) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 skills: 'Please select at least one skill.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 skills: ''
//             }));
//         }

//         setSkills((prevSkills) => ({
//             ...prevSkills,
//             [skill]: !prevSkills[skill]
//         }));
//     };

//     const handlePhoneNumberChange = (e) => {
//         const value = e.target.value;
//         setPhoneNumber(value);
//         if (!/^\d{10}$/.test(value)) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 phoneNumber: 'Phone number must be 10 digits long.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 phoneNumber: ''
//             }));
//         }
//     };

//     const handleResumeChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             // Check file type and size
//             const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
//             const maxSize = 10 * 1024 * 1024; // 15MB

//             if (allowedTypes.includes(file.type) && file.size <= maxSize) {
//                 setResume(file);
//                 setErrors((prevErrors) => ({
//                     ...prevErrors,
//                     resume: ''
//                 }));
//             } else {
//                 setResume(null);
//                 setErrors((prevErrors) => ({
//                     ...prevErrors,
//                     resume: 'Invalid file type or size. Only PDF, DOC, DOCX files up to 5MB are allowed.'
//                 }));
//             }
//         }
//     };

//     const handleGenderChange = (e) => {
//         const value = e.target.value;
//         setGender(value);

//         if (value === '') {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 gender: 'Please select a gender.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 gender: ''
//             }));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {

//             const selectedSkills = Object.keys(skills).filter(skill => skills[skill]);
//             setFormData(prev => {
//                 return [
//                     ...prev,
//                     {
//                         name,
//                         email,
//                         password,
//                         confirmPassword,
//                         skills: selectedSkills,
//                         role,
//                         bio,
//                         gender,
//                         resume,
//                         phoneNumber
//                     }
//                 ]
//             })

//             setName('');
//             setEmail('');
//             setPassword('');
//             setConfirmPassword('');
//             setBio('');
//             setGender('');
//             setPhoneNumber('');
//             setRole('');
//             setSkills({
//                 html: false,
//                 css: false,
//                 js: false,
//                 react: false,
//                 node: false,
//                 express: false
//             })
//             setErrors({
//                 name: '',
//                 email: '',
//                 password: '',
//                 confirmPassword: '',
//                 bio: '',
//                 role: '',
//                 skills: '',
//                 phoneNumber: '',
//                 resume: '',
//                 gender: ''
//             })


//             // alert(`
//             //     Form submitted Successfully
//             //     Name: ${name}
//             //     Email: ${email}
//             //     Password: ${password}
//             //     Bio: ${bio}
//             //     Role: ${role}
//             //     Skills: ${selectedSkills.join(', ')}
//             //     Phone Number: ${phoneNumber}
//             //     Gender: ${gender}
//             //     Resume: ${resume.name}
//             // `);
//         }
//     };

//     const validateForm = () => {
//         let isValid = true;

//         if (name.trim() === '') {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 name: 'Name is Required.'
//             }));
//             isValid = false;
//         }

//         if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 email: 'Invalid email address.'
//             }));
//             isValid = false;
//         }

//         if (!password) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 password: 'Password is required.'
//             }));
//             isValid = false;
//         }

//         if (confirmPassword !== password) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 confirmPassword: 'Passwords do not match.'
//             }));
//             isValid = false;
//         }

//         if (bio.length === 0) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 bio: 'Bio cannot be empty.'
//             }));
//             isValid = false;
//         }

//         if (role === '') {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 role: 'Please select a role.'
//             }));
//             isValid = false;
//         }

//         if (Object.values(skills).filter(skill => skill).length === 0) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 skills: 'Please select at least one skill.'
//             }));
//             isValid = false;
//         }

//         if (!/^\d{10}$/.test(phoneNumber)) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 phoneNumber: 'Phone number must be 10 digits long.'
//             }));
//             isValid = false;
//         }

//         if (gender === '') {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 gender: 'Please select a gender.'
//             }));
//             isValid = false;
//         }

//         if (!resume) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 resume: 'Please upload your resume.'
//             }));
//             isValid = false;
//         }

//         return isValid;
//     };

//     return (
//         <div className="form-container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="username">Name</label>
//                     <input
//                         value={name}
//                         onChange={handleNameChange}
//                         id="username"
//                         type="text"
//                         placeholder="Name"
//                     />
//                     {errors.name && <p className="error">{errors.name}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="email">Email Address</label>
//                     <input
//                         value={email}
//                         onChange={handleEmailChange}
//                         id="email"
//                         type="email"
//                         placeholder="Email Address"
//                     />
//                     {errors.email && <p className="error">{errors.email}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         value={password}
//                         onChange={handlePasswordChange}
//                         id="password"
//                         type="password"
//                         placeholder="Password"
//                     />
//                     {errors.password && <p className="error">{errors.password}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="confirm-password">Confirm Password</label>
//                     <input
//                         value={confirmPassword}
//                         onChange={handleConfirmPasswordChange}
//                         id="confirm-password"
//                         type="password"
//                         placeholder="Confirm Password"
//                     />
//                     {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="bio">Bio</label>
//                     <textarea
//                         value={bio}
//                         onChange={handleBioChange}
//                         id="bio"
//                         placeholder="Tell us about yourself"
//                     />
//                     {errors.bio && <p className="error">{errors.bio}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="role">Role</label>
//                     <select
//                         value={role}
//                         onChange={handleRoleChange}
//                         id="role"
//                     >
//                         <option value="">Select a role</option>
//                         <option value="developer">Developer</option>
//                         <option value="designer">Designer</option>
//                         <option value="project-manager">Project Manager</option>
//                     </select>
//                     {errors.role && <p className="error">{errors.role}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label>Skills</label>
//                     <div>
//                         {Object.keys(skills).map((skill, index) => (
//                             <label key={index}>
//                                 <input
//                                     className='form-input'
//                                     type="checkbox"
//                                     checked={skills[skill]}
//                                     onChange={() => handleSkillsChange(skill)}
//                                 /> {skill}
//                             </label>
//                         ))}
//                     </div>
//                     {errors.skills && <p className="error">{errors.skills}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="phone">Phone Number</label>
//                     <input
//                         value={phoneNumber}
//                         onChange={handlePhoneNumberChange}
//                         id="phone"
//                         type="tel"
//                         placeholder="Phone Number"
//                     />
//                     {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="resume">Upload Resume</label>
//                     <input
//                         className='form-input'
//                         type="file"
//                         id="resume"
//                         accept=".pdf,.doc,.docx"
//                         onChange={handleResumeChange}
//                     />
//                     {errors.resume && <p className="error">{errors.resume}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label>Gender</label>
//                     <div>
//                         <label>
//                             <input
//                                 className='form-input'
//                                 type="radio"
//                                 value="male"
//                                 checked={gender === 'male'}
//                                 onChange={handleGenderChange}
//                             /> Male
//                         </label>
//                         <label>
//                             <input
//                                 className='form-input'
//                                 type="radio"
//                                 value="female"
//                                 checked={gender === 'female'}
//                                 onChange={handleGenderChange}
//                             /> Female
//                         </label>
//                         <label>
//                             <input
//                                 className='form-input'
//                                 type="radio"
//                                 value="other"
//                                 checked={gender === 'other'}
//                                 onChange={handleGenderChange}
//                             /> Other
//                         </label>
//                     </div>
//                     {errors.gender && <p className="error">{errors.gender}</p>}
//                 </div>

//                 <button type="submit" className='btn-sing-up'>Sign Up</button>
//             </form>
//         </div>
//     );
// }
// export default FormValidation1;












// import React, { useState } from 'react';

// import './FormValidation1.css'

// const nameRegex = /^[a-zA-Z\s]+$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

// function FormValidation1() {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [bio, setBio] = useState('');
//     const [role, setRole] = useState('');
//     const [errors, setErrors] = useState({
//         name: false,
//         email: false,
//         password: false,
//         confirmPassword: false,
//         bio: false,
//         role: false
//     });

//     const handleNameChange = (e) => {
//         const value = e.target.value;
//         setName(value);

//         if (!nameRegex.test(value)) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 name: 'Name should only contain letters and spaces.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 name: ''
//             }));
//         }
//     };

//     const handleEmailChange = (e) => {
//         const value = e.target.value;
//         setEmail(value);
//         if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 email: 'Invalid email address.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 email: ''
//             }));
//         }
//     };

//     const handlePasswordChange = (e) => {
//         const value = e.target.value;
//         setPassword(value);

//         if (!passwordRegex.test(value)) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 password: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 password: ''
//             }));
//         }
//     };

//     const handleConfirmPasswordChange = (e) => {
//         const value = e.target.value;
//         setConfirmPassword(value);
//         if (value !== password) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 confirmPassword: 'Passwords do not match.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 confirmPassword: ''
//             }));
//         }
//     };

//     const handleBioChange = (e) => {
//         const value = e.target.value;
//         setBio(value.trim());
//         if (value.length === 0) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 bio: 'Bio cannot be empty.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 bio: ''
//             }));
//         }
//     };

//     const handleRoleChange = (e) => {
//         const value = e.target.value;
//         setRole(value);
//         if (value === '') {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 role: 'Please select a role.'
//             }));
//         } else {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 role: ''
//             }));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             alert(`
//                 Form submitted Successfully
//                 name: ${name},
//                 email:  ${email},
//                 password:  ${password},
//                 confirmPassword:  ${confirmPassword},
//                 bio:  ${bio},
//                 role:  ${role},
//            `);
//         }
//     };

//     const validateForm = () => {
//         let isValid = true;

//         if (name.trim() === '') {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 name: 'Name is Required.'
//             }));
//             isValid = false;
//         }

//         if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 email: 'Invalid email address.'
//             }));
//             isValid = false;
//         }

//         if (!password) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 password: 'Password is required.'
//             }));
//             isValid = false;
//         }

//         if (confirmPassword !== password) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 confirmPassword: 'Passwords do not match.'
//             }));
//             isValid = false;
//         }

//         if (bio.length === 0) {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 bio: 'Bio cannot be empty.'
//             }));
//             isValid = false;
//         }

//         if (role === '') {
//             setErrors((prevErrors) => ({
//                 ...prevErrors,
//                 role: 'Please select a role.'
//             }));
//             isValid = false;
//         }

//         if (errors.name || errors.email || errors.password || errors.confirmPassword || errors.bio || errors.role) {
//             isValid = false;
//         }

//         return isValid;
//     };

//     return (
//         <div className="form-container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="username">Name</label>
//                     <input
//                         value={name}
//                         onChange={handleNameChange}
//                         id="username"
//                         type="text"
//                         placeholder="Name"
//                     />
//                     {errors.name && <p className="error">{errors.name}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="email">Email Address</label>
//                     <input
//                         value={email}
//                         onChange={handleEmailChange}
//                         id="email"
//                         type="email"
//                         placeholder="Email Address"
//                     />
//                     {errors.email && <p className="error">{errors.email}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         value={password}
//                         onChange={handlePasswordChange}
//                         id="password"
//                         type="password"
//                         placeholder="Password"
//                     />
//                     {errors.password && <p className="error">{errors.password}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="confirm-password">Confirm Password</label>
//                     <input
//                         value={confirmPassword}
//                         onChange={handleConfirmPasswordChange}
//                         id="confirm-password"
//                         type="password"
//                         placeholder="Confirm Password"
//                     />
//                     {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="bio">Bio</label>
//                     <textarea
//                         value={bio}
//                         onChange={handleBioChange}
//                         id="bio"
//                         placeholder="Tell us about yourself"
//                     />
//                     {errors.bio && <p className="error">{errors.bio}</p>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="role">Role</label>
//                     <select
//                         value={role}
//                         onChange={handleRoleChange}
//                         id="role"
//                     >
//                         <option value="">Select a role</option>
//                         <option value="developer">Developer</option>
//                         <option value="designer">Designer</option>
//                         <option value="project-manager">Project Manager</option>
//                     </select>
//                     {errors.role && <p className="error">{errors.role}</p>}
//                 </div>

//                 <button type="submit" className='btn-sing-up'>Sign Up</button>
//             </form>
//         </div>
//     );
// }

// export default FormValidation1;
