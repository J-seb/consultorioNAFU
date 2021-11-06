import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import Lottie from 'react-lottie';
import loader from '../lotties/lottie.json';
import { verifyUser } from "../services/verifyUser";

const Validate = () => {

    const [isValidated, setIsValidated] = useState(false);

    useEffect(() => {
        (async () => {
            const result = await verifyUser();
            if (result) {
                window.localStorage.setItem('session', 'true');
                setIsValidated(true);
            }
        })();
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {
            presserveAspectRatio: 'xMidYMid slice'
        }
    }

    if(isValidated) {
        return <Redirect to="/" />
    }

    return (
        <div className="validator-container">
            <h1>Validating...</h1>
            <Lottie options={defaultOptions} height={300} width={300} />
        </div>
    );
};
export default Validate;
