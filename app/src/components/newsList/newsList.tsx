import React from 'react';
import Image from 'next/image';

interface NewsItem {
    id: number;
    title: string;
    description: React.ReactNode;
    image: string;
    direction: string;
}

interface NewsListProps {
    items: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ items }) => {

    const directionImage = (direction: string) => {
        if (direction === 'left') {
            return 'right-0';
        } else if (direction === 'right') {
            return 'left-0';
        }
        return 'right-0';
    };
    const directionDialog = (direction: string) => {
        if (direction === 'left') {
            return 'left-0';
        } else if (direction === 'right') {
            return 'right-0';
        }
        return 'left-0';
    };

    return (
        <div className="flex flex-col items-center justify-center h-fit w-full  pt-[4vh] font-roboto">
            {items.map((item) => (
                <button key={item.id} id={`${item.id}`} className='w-[70%] h-[75vh] mb-[7vh] flex flex-row items-end  relative rounded-2xl overflow-hidden hover:scale-105'>
                    <div className={`w-[65%] h-[90%] bg-white flex flex-col justify-around absolute rounded-2xl  px-[5vw] py-[5vh] z-10 ${directionDialog(item.direction)}`}>
                        <h3 className='text-[2.5vw] text-sigca-blue font-bold'>{item.title}</h3>
                        <div className='text-[1vw] text-[#0f0a1880] w-full h-fit'>{item.description}</div>
                    </div>
                    <div className={`w-[45%] h-full bg-white absolute rounded-2xl overflow-hidden flex flex-col justify-center items-center ${directionImage(item.direction)}`}>
                        <Image src={item.image} alt={item.title} layout='fill' objectFit='cover' />
                    </div>
                </button>
            ))}
        </div>
    );
};

export default NewsList;