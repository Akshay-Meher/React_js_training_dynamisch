import React from 'react'

function From() {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Name</label>
                <input
                    value={name}
                    onChange={handleNameChange}
                    id="username"
                    type="text"
                    placeholder="Name"
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    value={email}
                    onChange={handleEmailChange}
                    id="email"
                    type="email"
                    placeholder="Email Address"
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={handlePasswordChange}
                    id="password"
                    type="password"
                    placeholder="Password"
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                    value={bio}
                    onChange={handleBioChange}
                    id="bio"
                    placeholder="Tell us about yourself"
                />
                {errors.bio && <p className="error">{errors.bio}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                    value={role}
                    onChange={handleRoleChange}
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
                    {Object.keys(skills).map((skill, index) => (
                        <label key={index}>
                            <input
                                className='form-input'
                                type="checkbox"
                                checked={skills[skill]}
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
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                />
                {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="resume">Upload Resume</label>
                <input
                    className='form-input'
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
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
                            checked={gender === 'male'}
                            onChange={handleGenderChange}
                        /> Male
                    </label>
                    <label>
                        <input
                            className='form-input'
                            type="radio"
                            value="female"
                            checked={gender === 'female'}
                            onChange={handleGenderChange}
                        /> Female
                    </label>
                    <label>
                        <input
                            className='form-input'
                            type="radio"
                            value="other"
                            checked={gender === 'other'}
                            onChange={handleGenderChange}
                        /> Other
                    </label>
                </div>
                {errors.gender && <p className="error">{errors.gender}</p>}
            </div>

            <button type="submit" className='btn-sing-up'>Sign Up</button>
        </form>
    )
}

export default From