import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Banner from '@/components/banner/banner';
import InputField from '@/components/inputField/inputField';
import DirectorNav from '@/components/directorNav/directorNav';

const DirectorPage: React.FC = () => {
    const router = useRouter();
    const { view } = router.query;

    const [formData, setFormData] = useState({ buscar: '' });

    if (typeof view !== 'string') {
        return null;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const clubId = sessionStorage.getItem("clubid") || "";
    console.log("Club ID recuperado:", clubId);


    return (
        <div className='flex w-full flex-col bg-gris-container-clubes items-center justify-center'>
            <Banner category={view as string} />
            <div className='flex items-center justify-center mt-[4vh] w-[80%] flex-col'>
                <div className='flex flex-row justify-start w-full'>
                    <h2 className='text-right font-roboto text-[3vw] font-semibold px-[2vw] pt-[0.5vw]'>Administrador</h2>
                    <div className='flex flex-row justify-end w-[40%] mr-0 ml-auto'>
                        <InputField label='Buscar' type="text" name='buscar' value={formData.buscar} onChange={handleChange} icon='/lupa.svg' iconSize={25} />
                    </div>
                </div>
                <DirectorNav id={clubId} />
            </div>
        </div>
    );
};

export default DirectorPage;
