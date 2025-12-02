import Banner from '@/components/banner/banner';
import NewsList from '@/components/newsList/newsList';
import React from 'react';

const Noticias: React.FC = () => {
    return (
        <div className='bg-gris-container-clubes flex flex-col items-center justify-center'>
            <Banner category='Información' />
            <NewsList items={[
                {
                    id: 1,
                    title: 'gestiona tus\ndocumentos',
                    description:
                        <div>
                            <p>Morbi ornare velit vitae felis commodo, at blandit est vestibulum. Mauris quam arcu,
                                facilisis ut vestibulum sit amet, pellentesque in metus. Aenean pharetra mauris ac sem faucibus,
                                consectetur ullamcorper ex fermentum. Mauris placerat scelerisque pulvinar.</p>
                            <p className='mt-[2vh]'>Etiam accumsan justo ut justo elementum rhoncus. Morbi ullamcorper pharetra ligula, eget vehicula nunc
                                dignissim hendrerit. In dignissim sodales arcu ac mattis. Etiam ut ante ut nunc gravida facilisis congue et
                                eros. Nam posuere placerat finibus. Etiam laoreet at velit eu tincidunt. Phasellus ligula sapien, tincidunt a
                                dui ac, rhoncus dictum dui. Mauris vitae metus congue, commodo velit et, iaculis tortor. Donec imperdiet est
                                sem, id congue velit hendrerit at.</p>
                        </div>,
                    direction: 'left',
                    image: '/inicial.png'
                },
                {
                    id: 2,
                    title: 'completamente\nseguro',
                    description:
                        <div>
                            <p>Morbi ornare velit vitae felis commodo, at blandit est vestibulum. Mauris quam arcu,
                                facilisis ut vestibulum sit amet, pellentesque in metus. Aenean pharetra mauris ac sem faucibus,
                                consectetur ullamcorper ex fermentum. Mauris placerat scelerisque pulvinar.</p>
                            <p className='mt-[2vh]'>Etiam accumsan justo ut justo elementum rhoncus. Morbi ullamcorper pharetra ligula, eget vehicula nunc
                                dignissim hendrerit. In dignissim sodales arcu ac mattis. Etiam ut ante ut nunc gravida facilisis congue et
                                eros. Nam posuere placerat finibus. Etiam laoreet at velit eu tincidunt. Phasellus ligula sapien, tincidunt a
                                dui ac, rhoncus dictum dui. Mauris vitae metus congue, commodo velit et, iaculis tortor. Donec imperdiet est
                                sem, id congue velit hendrerit at.</p>
                        </div>,
                    direction: 'right',
                    image: '/libro.png'
                },
                {
                    id: 3,
                    title: '+ facil\n+ rapido',
                    description:
                        <div>
                            <p>Morbi ornare velit vitae felis commodo, at blandit est vestibulum. Mauris quam arcu,
                                facilisis ut vestibulum sit amet, pellentesque in metus. Aenean pharetra mauris ac sem faucibus,
                                consectetur ullamcorper ex fermentum. Mauris placerat scelerisque pulvinar.</p>
                            <p className='mt-[2vh]'>Etiam accumsan justo ut justo elementum rhoncus. Morbi ullamcorper pharetra ligula, eget vehicula nunc
                                dignissim hendrerit. In dignissim sodales arcu ac mattis. Etiam ut ante ut nunc gravida facilisis congue et
                                eros. Nam posuere placerat finibus. Etiam laoreet at velit eu tincidunt. Phasellus ligula sapien, tincidunt a
                                dui ac, rhoncus dictum dui. Mauris vitae metus congue, commodo velit et, iaculis tortor. Donec imperdiet est
                                sem, id congue velit hendrerit at.</p>
                        </div>,
                    direction: 'left',
                    image: '/ultimate.png'
                },
            ]} />
        </div>
    );
};

export default Noticias;