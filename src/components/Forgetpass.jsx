// import React, { useState } from 'react';

// const forgotpass = () => {
//     const [identifier, setIdentifier] = useState('');
//     const handleSubmit = (event) => {
//         event.preventDefault();
//     };
//     return (
//         <div className="login-container">
//             <h1 className="loginHeading">Forgot Password</h1>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="identifier">Email or Phone Number to send OTP:</label>
//                 <input
//                     type="text"
//                     name="identifier"
//                     placeholder="Enter Email or Phone Number"
//                     required
//                     value={identifier}
//                     onChange={(e) => setIdentifier(e.target.value)}
//                 />
//                 <button type="submit">Send OTP</button>
//             </form>
//             <div className="additional-options">
//                 <a href="/login" className="register-link">
//                     Remember your password? Sign in here
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default forgotpass;

import React, { useState } from 'react';
import "./Forgetpass.css";

const ForgotPassword = () => {
    const [identifier, setIdentifier] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your code to handle the form submission goes here
    };

    return (
        <div className="forgot-password-container">
            <h1 className="forgot-password-heading">Forgot Password</h1>
            <form className="forgot-password-form" onSubmit={handleSubmit}>
                <label htmlFor="identifier" className='email-phone'>Email or Phone Number to send OTP:</label>
                <input
                    type="text"
                    id="identifier"
                    name="identifier"
                    placeholder="Enter Email or Phone Number"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                />
                <button type="submit">Send OTP</button>
            </form>
            <div className="forgot-password-options">
                <a href="/login" className="forgot-password-link">
                    Remember your password? Sign in here
                </a>
            </div>
        </div>
    );
};

export default ForgotPassword;

