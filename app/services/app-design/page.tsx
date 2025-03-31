'use client';
import Image from 'next/image';
export default function AppDesign() {
    const designProcess = [
        {
            title: "Research & Planning",
            description: "In-depth analysis of user needs and requirements.",
            icon: "pi pi-search"
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and engaging user interfaces.",
            icon: "pi pi-palette"
        },
        {
            title: "Development",
            description: "Robust app development using latest technologies.",
            icon: "pi pi-code"
        },
        {
            title: "Testing & Launch",
            description: "Thorough testing and successful deployment.",
            icon: "pi pi-check-circle"
        }
    ];

    const appTypes = [
        {
            title: "Native Apps",
            description: "iOS and Android native application development",
            icon: "pi pi-mobile"
        },
        {
            title: "Cross-Platform",
            description: "Efficient multi-platform applications",
            icon: "pi pi-desktop"
        },
        {
            title: "Progressive Web Apps",
            description: "Modern web apps with native-like features",
            icon: "pi pi-globe"
        }
    ];

    const capabilities = [
        {
            title: "User Interface",
            description: "Modern and intuitive UI design",
            icon: "pi pi-pencil"
        },
        {
            title: "Offline Mode",
            description: "Functionality without internet connection",
            icon: "pi pi-wifi"
        },
        {
            title: "Push Notifications",
            description: "Engage users with timely notifications",
            icon: "pi pi-bell"
        },
        {
            title: "Analytics",
            description: "Track user behavior and app performance",
            icon: "pi pi-chart-line"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-[100px]">
            {/* Hero Section */}
            <div className="bg-[#000756] text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">App Design</h1>
                            <p className="text-lg leading-relaxed">
                                Innovative mobile application design and development, creating intuitive 
                                and engaging apps that deliver exceptional user experiences.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                <i className="pi pi-mobile absolute text-white/10" 
                                   style={{ fontSize: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Design Process Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#000756] mb-12">Design Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {designProcess.map((step, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-center mb-4">
                                    <i className={`${step.icon} text-[#1DBA57]`} style={{ fontSize: '3rem' }}></i>
                                </div>
                                <h3 className="text-xl font-bold text-[#000756] text-center mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* App Types Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-[#000756] to-[#1DBA57] p-12 rounded-lg text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">App Types</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {appTypes.map((type, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                                    <p>{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Capabilities Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#000756] mb-12">Features & Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="p-6">
                                <div className="text-center mb-4">
                                    <i className={`${capability.icon} text-[#1DBA57]`} style={{ fontSize: '2rem' }}></i>
                                </div>
                                <h3 className="text-xl font-bold text-[#000756] mb-4">{capability.title}</h3>
                                <p className="text-gray-600">{capability.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}