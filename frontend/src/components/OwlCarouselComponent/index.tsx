// components/OwlCarouselComponent.tsx
'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

interface OwlCarouselComponentProps {
    posters: { id: number; image: string }[];
}

const OwlCarouselComponent: React.FC<OwlCarouselComponentProps> = ({ posters }) => {
    const carouselOptions = {
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <OwlCarousel className="owl-theme" {...carouselOptions}>
            {posters.map((poster) => (
                <div key={poster.id} className="item">
                    <div className="destination">
                        <a
                            href="#"
                            className="img"
                            style={{ backgroundImage: `url(${poster.image})` }}
                        ></a>
                    </div>
                </div>
            ))}
        </OwlCarousel>
    );
};

export default OwlCarouselComponent;