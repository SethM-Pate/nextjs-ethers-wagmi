import React, { useState } from 'react';

const EmailSignup = () => {

    const DYNAMIC_ENVIRONMENT_ID = "71d65241-bf76-4e10-8a42-6b78b7f1c7c1";

    const [email, setEmail] = useState("");
    const [verifying, setVerifying] = useState(false);
    const [OTP, setOTP] = useState("");
    const [UUID, setUUID] = useState("");
    const [JWT, setJWT] = useState("");

    const sendEmailVerification = async () => {};
    const verify = async () => {};

    return (
        <div>
            <h1>Signup with Email</h1>
            <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            value={email}
            />
            <button onClick={() => sendEmailVerification()}>Submit</button>
            {verifying && (
            <div>
                <input
                type="text"
                onChange={(e) => setOTP(e.target.value)}
                placeholder="Enter your OTP"
                value={OTP}
                />
                <button onClick={() => verify()}>Verify</button>
            </div>
            )}
            {JWT && <p>Your JWT is: {JWT}</p>}
        </div>
    );
}
