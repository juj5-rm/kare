'use client';

import React from 'react';
import { PrincipalButtonProps } from '../../interfaces/PrincipalButtonProps.interface';



const PrincipalButton: React.FC<PrincipalButtonProps> = ({ onClickUrl, label }) => {
    const handleClick = () => {
        window.location.href = onClickUrl;
    };

    return (
        <button onClick={handleClick} className={`text-sigca-white bg-sigca-blue font-roboto font-bold py-1 px-4 rounded-lg hover:bg-sigca-contraste transition duration-300 ease-in-out mt-auto mb-0`}>
            {label}
        </button>
    );
};

export default PrincipalButton;