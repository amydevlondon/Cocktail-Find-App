import React from 'react';
import './index.css';
import { MdErrorOutline } from 'react-icons/md';

export const Error = () => {
    return (
        <div className="error">
            <div className="error-message">
                <h4>Error</h4>
                <MdErrorOutline />
                <p>Something went wrong</p>
            </div>
        </div>
    );
};

export default Error;