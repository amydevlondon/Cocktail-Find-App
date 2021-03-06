import React from 'react';
import './index.css';
import { MdErrorOutline } from 'react-icons/md';

const Error = ({ message = "something went wrong" }) => {
    return (
        <div className="error">
            <div>
                <h4 className="error-title">Error</h4>
                <MdErrorOutline className="error-icon" />
                <p className="error-message">{message}</p>
            </div>
        </div>
    );
};

export default Error;