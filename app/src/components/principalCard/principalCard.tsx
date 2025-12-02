import React from 'react';
import Image from 'next/image';
import PrincipalButton from '../principalButton/principalButton';
import styles from './principalCard.module.css';
import { PrincipalCardProps} from '@/interfaces/PrincipalCardProps.interface';

const PrincipalCard: React.FC<PrincipalCardProps & { bgColor: string , color: string}> = ({ title, imageUrl, onButtonClick, label, width, bgColor, color }) => {
    return (
        <div
            className={`w-[29%] flex flex-col items-center justify-center text-center p-4 py-8 rounded-2xl ${bgColor}`}
        >
            <Image
                src={imageUrl}
                alt={title}
                className={styles['club-card-image']}
                width={width}
                height={width}
            />
            <pre className={`${styles.title} font-jura mt-2 mb-1 ${color} uppercase`}>{title}</pre>
            <PrincipalButton onClickUrl={onButtonClick} label={label} />
        </div>
    );
};

export default PrincipalCard;
