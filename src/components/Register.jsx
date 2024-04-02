import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css"; // Ensure you have a similar CSS file in your project

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        phonenumber: "",
        email: "",
        dob: "",
        gender: "male", // default to 'male' or choose another default
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch("/register-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Registration failed. Please try again.");
            }

            // Reset form fields by setting formData state to initial state
            setFormData({
                name: "",
                phonenumber: "",
                email: "",
                dob: "",
                gender: "male", // Resetting to default value
                password: "",
            });

            // Redirect to login page after successful registration
            window.location.href = "/login";
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="register-container">
            <h1 className="registerHeading">Registration</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    required
                />
                <input
                    type="text"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    required
                />
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="Date of Birth"
                    required
                />
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    required
                />
                <button type="submit">Register</button>
            </form>
            <div className="additional-options">
                <Link to="/login" className="signin-link">
                    Already have an account? Sign in here
                </Link>
            </div>
        </div>
    );
};

export default Registration;
