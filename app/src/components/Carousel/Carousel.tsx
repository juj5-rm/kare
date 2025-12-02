import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Countdown from '../countDown/countDown'; // Asegúrate de ajustar la ruta según la ubicación de tu componente Countdown

const images = [
    '/inicial.png',
    '/libro.png',
    '/ultimate.png',
];

const Carrusel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia la imagen cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            {/* Contenedor con posición relativa y altura */}
            <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="object-cover object-center"
                fill
            />
            <div className="absolute top-0 left-0 w-full mt-[6vh] ml-[40vh] flex">
                <Countdown targetDate={'2025-04-16T19:00:00'} />
            </div>
        </div>
    );
};

export default Carrusel;
