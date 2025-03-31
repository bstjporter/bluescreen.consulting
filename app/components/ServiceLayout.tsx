'use client';
import ServiceHero from './ServiceHero';

interface ServiceLayoutProps {
    title: string;
    description: string;
    icon: string;
    backgroundImage?: string;
    children: React.ReactNode;
}

export default function ServiceLayout({ 
    title, 
    description, 
    icon, 
    backgroundImage,
    children 
}: ServiceLayoutProps) {
    return (
        <div className="min-h-screen">
            <ServiceHero title={title} icon={icon} backgroundImage={backgroundImage} />
            <div className="bg-white py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <p className="text-xl text-gray-700 mb-8">
                        {description}
                    </p>
                    <div className="prose max-w-none text-gray-700">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}