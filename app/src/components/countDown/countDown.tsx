"use client";

import { CountdownProps } from '../../interfaces/CountDownProps.interface';


const Countdown: React.FC<CountdownProps> = () => {



    return (
        <div className='z-100 w-full flex flex-col justify-center bg-transparent text-sigca-white'>

            <h1 className='font-roboto text-[2.9vw] font-bold text-start w-[25%] mb-[6vh] mt-[10vh]'>¿Qué esperas para unirte a nosotros?</h1>
            <button 
                className='w-fit text-sigca-white hover:bg-sigca-contraste bg-sigca-blue font-roboto font-bold py-2 px-4 rounded-lg text-xl transition duration-300 ease-in-out'
                onClick={() => window.location.href = '/login?view=register'}
            >
                registrate ahora
            </button>
        </div>
    );
};

export default Countdown;