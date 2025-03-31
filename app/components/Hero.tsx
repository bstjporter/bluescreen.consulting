'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Orb {
    id: number;
    color: string;
    initialPosition: { x: number; y: number };
    speed: { x: number; y: number };
}

export default function Hero() {
    const [orbs, setOrbs] = useState<Orb[]>([]);

    useEffect(() => {
        const orbColors = [
            '#000756',
            '#003C88',
            '#00B140',
            '#1DBA57',
            '#585C6D',
            '#A0A4B1'
        ];

        const newOrbs = orbColors.flatMap((color, index) => 
            Array.from({ length: 6 }, (_, i) => ({
                id: index * 6 + i,
                color,
                initialPosition: {
                    x: 20 + Math.random() * 60,
                    y: 20 + Math.random() * 60
                },
                speed: {
                    x: 0.3 + Math.random() * 0.2,
                    y: 0.3 + Math.random() * 0.2
                }
            }))
        );

        setOrbs(newOrbs);
    }, []);

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('services-section');
        const navHeight = 85; // Height of our navbar
        if (nextSection) {
            const sectionTop = nextSection.offsetTop - navHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gray-50 pt-[100px]">
            <div className="absolute inset-[10%]">
            {orbs.map((orb) => (
                <div
                    key={orb.id}
                    className="orb absolute rounded-full blur-3xl opacity-30"
                    style={({
                        backgroundColor: orb.color,
                        left: `${orb.initialPosition.x}%`,
                        top: `${orb.initialPosition.y}%`,
                        animationDelay: `${orb.id * 0.5}s`,
                        '--orb-speed-x': `${orb.speed.x}`,
                        '--orb-speed-y': `${orb.speed.y}`,
                        width: '5vw',
                        height: '5vw'
                    } as any)}
                />
            ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
                <div className="relative w-[80vw] h-[80vh] max-w-[800px] max-h-[800px]">
                    <div className="absolute inset-0 bg-gradient-to-r 
                        from-gray-50 from-20% 
                        via-transparent via-35% 
                        to-gray-50 to-80% 
                        z-10" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t 
                        from-gray-50 from-20% 
                        via-transparent via-35% 
                        to-gray-50 to-80% 
                        z-10" />
                    <Image
                        src="/img/globe.png"
                        alt="BlueScreen Consulting Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-10 container mx-auto px-4">
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/img/bsc-logo.png"
                            alt="BlueScreen Consulting Logo"
                            width={650}
                            height={650}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[#000756] mb-6 animate-fadeIn text-center">
                    Future-Proofed IT Solutions for Your Success
                    </h1>

                    <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mb-6 animate-fadeIn animation-delay-200 font-semibold text-justify">
                    For over 25 years, BlueScreen Consulting has been delivering exceptional IT services to businesses worldwide. From comprehensive 
                    IT management to cutting-edge cloud deployments, we provide the expertise and solutions to future-proof your business. Our services 
                    include full IT infrastructure management, cloud migration and optimization, cybersecurity solutions, and strategic IT consulting — 
                    ensuring your business thrives today and stays ahead tomorrow.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={scrollToNextSection}
                            className="bg-[#000756] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 group"
                        >
                            <div className="flex items-center gap-2">
                                <i className='pi pi-angle-double-down group-hover:animate-bounce-slow' style={{ fontSize: '1.5rem' }}></i>
                                Learn More
                                <i className='pi pi-angle-double-down group-hover:animate-bounce-slow' style={{ fontSize: '1.5rem' }}></i>
                            </div>
                        </button>
                        <button
                            className="bg-[#1DBA57] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 group"
                        >
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/ico/pencil-doc.svg"
                                    alt="Get a Quote"
                                    width={24}
                                    height={24}
                                    className="group-hover:animate-pulse-slow"
                                />
                                Get a Quote
                                <Image
                                    src="/ico/pencil-doc.svg"
                                    alt="Get a Quote"
                                    width={24}
                                    height={24}
                                    className="group-hover:animate-pulse-slow"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}