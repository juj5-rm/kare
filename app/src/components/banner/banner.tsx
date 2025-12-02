import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
    category: string;
}

const Banner: React.FC<BannerProps> = ({ category }) => {

    const getCategoryClasses = (category: string) => {
        switch (category) {
            case 'Somos K.A.R.E':
            case 'Actualidad':
            case 'Información':
                return 'bg-sigca-blue text-5xl';
            default:
                return 'bg-gris-soporte text-5xl';
        }
    };

    const getCategoryImage = (category: string) => {
        switch (category.toLowerCase()) {
            case 'conquistadores':
            case 'Conquistadores':
                return '/conquistadores2.svg';
            case 'guias mayores':
            case 'Guias Mayores':
                return '/guiasMayores2.svg';
            case 'aventureros':
            case 'Aventureros':
                return '/aventureros2.svg';
            default:
                return '/blueSIGCA.svg';
        }
    };

    const getdescription = (category: string) => {
        switch (category) {
            case 'Somos K.A.R.E':
                return 'Nosotros';
            case 'Actualidad':
                return 'Noticias';
            case 'Información':
                return 'Información';
            default:
                return '';
        }
    };

    const backgroundClass = getCategoryClasses(category);
    const backgroundImage = getCategoryImage(category);
    const description = getdescription(category);
    const width = 150;


    return (
        <div className={`relative w-full h-[40vh] ${backgroundClass} overflow-hidden`}>
            <div
                className={`relative z-20 flex items-center ${['conquistadores', 'aventureros', 'guías mayores'].includes(category.toLowerCase())
                    ? 'justify-center'
                    : 'justify-start pl-64'
                    } h-full`}
            >
                {['conquistadores', 'aventureros', 'guias mayores'].includes(category.toLowerCase()) && (
                    <Image
                        src={backgroundImage}
                        alt={category}
                        className="z-10 mr-4"
                        width={width}
                        height={width}
                    />
                )}
                <div>
                    <h1 className="text-white font-extrabold font-jura">
                        {['conquistadores', 'aventureros', 'guias mayores'].includes(category.toLowerCase())
                            ? "CLUB DE " + category.toUpperCase()
                            : category}
                    </h1>
                    <div className="flex flex-row items-center space-x-2 mt-2">
                        <Link href="/" className='text-white text-xl font-roboto '>Inicio</Link>
                        <p className='text-white text-xl font-roboto '>&gt;</p>
                        <p className='text-white text-xl font-roboto '>{description}</p>
                    </div>
                </div>
            </div>

            <Image
                src="/SIGCA.svg"
                alt="Sigca"
                className="absolute top-0 right-[-3vw] z-20 p-2"
                width={200}
                height={200}
            />
            <Image
                src="/SIGCA.svg"
                alt="Sigca"
                className="absolute bottom-0 left-[-2.5vw] z-30 p-2"
                width={150}
                height={150}
            />
        </div>
    );
};

export default Banner;