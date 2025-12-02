import Banner from '@/components/banner/banner';
import Image from 'next/image';
import React from 'react';

const Nosotros: React.FC = () => {
    return (
        <div className='bg-gris-container-clubes flex flex-col items-center justify-center'>
            <Banner category='Somos K.A.R.E' />
            <div className='flex flex-col items-center justify-center py-10 mt-6'>
                <p className='font-roboto font-bold text-2xl text-sigca-blue m-4'>Nuestra Historia</p>
                <h2 className='font-roboto text-5xl font-extrabold'>Así nació K.A.R.E</h2>
                <p className='font-roboto text-base w-[65%] m-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac cursus est. Nunc commodo vulputate sapien. Nunc quis dictum diam. Nullam nec lacus non eros condimentum laoreet. Morbi id est eget lectus rutrum efficitur. Sed sagittis et ligula vel malesuada. Praesent id commodo lacus, at facilisis libero. </p>
            </div>
            <div className='flex mt-6 w-[70%] mb-16 h-screen flex-col'>
                <div className='w-full h-[25%] items-center flex flex-row relative'>
                    <div className='w-[50%] h-full px-4 items-center flex flex-row border-r-[1px] border-[#C9C2DA]'>
                        <div className='w-[85%] ml-0 mr-0 bg-sigca-white shadow-sm h-[90%] rounded-lg py-4 px-6'>
                            <h2 className='font-extrabold text-[3vh] text-sigca-black'>
                                El Desafío
                            </h2>
                            <p className='font-roboto text-[2vh] text-[#0F0A18] mt-2'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac cursus est. Nunc commodo vulputate sapien. Nunc quis dictum diam.                              </p>
                        </div>
                    </div>
                    <div className="w-[50%] border-l-[1px] border-[#C9C2DA] h-full mr-0 ml-0 flex flex-col items-center justify-center">
                        <h2 className="font-jura font-bold text-[3vh] text-sigca-blue m-4">DEMASIADO PAPELEO</h2>
                    </div>
                    <Image
                        src="/punto.svg"
                        alt="conector"
                        width={20}
                        height={20}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
                <div className='w-full h-[25%] items-center flex flex-row relative'>
                    <div className="w-[50%] border-r-[1px] border-[#C9C2DA] h-full mr-0 ml-0 flex flex-col items-center justify-center">
                        <h2 className="font-jura font-bold text-[3vh] text-sigca-blue m-4">USAR LA TECNOLOGÍA</h2>
                    </div>
                    <div className='w-[50%] h-full px-4 items-center flex flex-row border-l-[1px] border-[#C9C2DA]'>
                        <div className='w-[85%] mr-0 ml-0 bg-sigca-white shadow-sm h-[90%] rounded-lg py-4 px-6'>
                            <h2 className='font-extrabold text-[3vh] text-sigca-black'>
                                La Solución
                            </h2>
                            <p className='font-roboto text-[2vh] text-[#0F0A18] mt-2'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac cursus est. Nunc commodo vulputate sapien. Nunc quis dictum diam.
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/punto.svg"
                        alt="conector"
                        width={20}
                        height={20}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
                <div className='w-full h-[25%] items-center flex flex-row relative'>
                    <div className='w-[50%] h-full px-4 items-center flex flex-row border-r-[1px] border-[#C9C2DA]'>
                        <div className='w-[85%] ml-0 mr-0 bg-sigca-white shadow-sm h-[90%] rounded-lg py-4 px-6'>
                            <h2 className='font-extrabold text-[3vh] text-sigca-black'>
                                El Impacto
                            </h2>
                            <p className='font-roboto text-[2vh] text-[#0F0A18] mt-2'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac cursus est. Nunc commodo vulputate sapien. Nunc quis dictum diam.
                            </p>
                        </div>
                    </div>
                    <div className="w-[50%] border-l-[1px] border-[#C9C2DA] h-full mr-0 ml-0 flex flex-col items-center justify-center">
                        <h2 className="font-jura font-bold text-[3vh] text-sigca-blue m-4">OPTIMIZACIÓN DE TIEMPO</h2>
                    </div>
                    <Image
                        src="/punto.svg"
                        alt="conector"
                        width={20}
                        height={20}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
                <div className='w-full h-[25%] items-center flex flex-row relative'>
                    <div className="w-[50%] border-r-[1px] border-[#C9C2DA] h-full mr-0 ml-0 flex flex-col items-center justify-center">
                        <h2 className="font-jura font-bold text-[3vh] text-sigca-blue m-4">ECOSISTEMA AMIGABLE</h2>
                    </div>
                    <div className='w-[50%] h-full px-4 items-center flex flex-row border-l-[1px] border-[#C9C2DA]'>
                        <div className='w-[85%] mr-0 ml-0 bg-sigca-white shadow-sm h-[90%] rounded-lg py-4 px-6'>
                            <h2 className='font-extrabold text-[3vh] text-sigca-black'>
                                Nuestro Futuro
                            </h2>
                            <p className='font-roboto text-[2vh] text-[#0F0A18] mt-2'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac cursus est. Nunc commodo vulputate sapien. Nunc quis dictum diam.
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/punto.svg"
                        alt="conector"
                        width={20}
                        height={20}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nosotros;