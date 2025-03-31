'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

interface ServiceCard {
    title: string;
    description: string;
    icon: string;
}

export default function Services() {
    const router = useRouter();
    const services: ServiceCard[] = [
        {
            title: "Web Design",
            description: "Custom, responsive web solutions tailored to your brand. We create modern, user-friendly websites that drive engagement and results.",
            icon: "pi pi-desktop"
        },
        {
            title: "Call Center",
            description: "End-to-end call center solutions including software integration, training, and optimization for maximum customer satisfaction.",
            icon: "pi pi-phone"
        },
        {
            title: "Cloud Deployment",
            description: "Seamless cloud migration and management services. We help you leverage the power of cloud computing for better scalability and efficiency.",
            icon: "pi pi-cloud"
        },
        {
            title: "IT Management",
            description: "Comprehensive IT infrastructure management ensuring your systems run smoothly and securely while maximizing performance.",
            icon: "pi pi-cog"
        },
        {
            title: "Social Media",
            description: "Strategic social media planning, content creation, and engagement management to build and maintain your brand's online presence.",
            icon: "pi pi-share-alt"
        },
        {
            title: "Media Services",
            description: "Professional media production, including video creation, editing, and digital content development for all your marketing needs.",
            icon: "pi pi-camera"
        },
        {
            title: "Project Implementation",
            description: "Expert project management and execution of IT initiatives, from planning to deployment, ensuring successful digital transformation.",
            icon: "pi pi-chart-line"
        },
        {
            title: "App Design",
            description: "Innovative mobile application design and development, creating intuitive and engaging apps that deliver exceptional user experiences.",
            icon: "pi pi-mobile"
        }
    ];

    return (
        <section id="services-section" className="w-full bg-[#000756] py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
                    Our Services
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg 
                                     hover:shadow-xl transition-all duration-300 
                                     transform hover:-translate-y-2 border border-white/20 
                                     cursor-pointer"
                            onClick={() => router.push(`/services/${service.title.toLowerCase().replace(/ /g, '-')}`)}
                        >
                            <div className="text-center mb-3 h-[50px] flex items-center justify-center">
                                <i className={`${service.icon} text-white group-hover:scale-110 transition-transform duration-300`}
                                   style={{ fontSize: '50px' }}></i>
                            </div>
                            <h3 className="text-xl font-bold text-center text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-200 text-center leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}