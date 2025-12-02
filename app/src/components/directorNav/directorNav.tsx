import React, { useState } from 'react';
import styles from './directorNav.module.css';
import { ClubMembers } from '../clubmemberList/clubMemberList';

const Seguros = () => <div>Projects Content</div>;
const Actividades = () => <div>Reports Content</div>;

interface DirectorNavProps {
    id: string;
}

const DirectorNav: React.FC<DirectorNavProps> = ({ id }) => {
    const [activeComponent, setActiveComponent] = useState<string>('Miembros');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Miembros':
                return <ClubMembers id={id} />;
            case 'Seguros':
                return <Seguros />;
            case 'Actividades':
                return <Actividades />;
            default:
                return null;
        }
    };

    return (
        <div className='flex flex-col w-full my-[2vw] p-[2vw]'>
            <ul className='flex list-none p-0 w-full border-b-[2px] border-[#DCD8E2]'>
                <li className={`mr-[2vw] font-extrabold ${styles[activeComponent === 'Miembros' ? 'active' : 'inactive']}`}>
                    <button onClick={() => setActiveComponent('Miembros')} className="focus:outline-none">
                        Miembros
                    </button>
                </li>
                <li className={`mr-[2vw] font-extrabold ${styles[activeComponent === 'Seguros' ? 'active' : 'inactive']}`}>
                    <button onClick={() => setActiveComponent('Seguros')} className="focus:outline-none">
                        Seguros
                    </button>
                </li>
                <li className={`mr-[2vw] font-extrabold ${styles[activeComponent === 'Actividades' ? 'active' : 'inactive']}`}>
                    <button onClick={() => setActiveComponent('Actividades')} className="focus:outline-none">
                        Actividades
                    </button>
                </li>
            </ul>
            <div>
                {renderComponent()}
            </div>
        </div>
    );
};

export default DirectorNav;
