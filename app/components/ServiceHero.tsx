'use client';
import Image from 'next/image';

interface ServiceHeroProps {
    title: string;
    icon: string;
    backgroundImage?: string;
}

export default function ServiceHero({ title, icon, backgroundImage }: ServiceHeroProps) {
    return (
        <div className="w-full bg-[#000756] h-[40vh] relative pt-[100px]">
            {backgroundImage && (
                <div className="absolute inset-0">
                    <Image
                        src={backgroundImage}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#000756]/50"></div>
                </div>
            )}
            <div className="max-w-7xl mx-auto px-4 h-full relative z-10">
                <div className="flex items-center justify-center h-full gap-4 md:gap-6">
                    <i 
                        className={`${icon} text-white`} 
                        style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
                    ></i>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
}