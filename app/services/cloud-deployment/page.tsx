'use client';
import Image from 'next/image';
export default function CloudDeployment() {
    const cloudServices = [
        {
            title: "Migration Strategy",
            description: "Comprehensive planning and execution of cloud migrations.",
            icon: "pi pi-arrow-right-arrow-left"
        },
        {
            title: "IaaS",
            description: "Infrastructure as a Service solutions for scalable computing.",
            icon: "pi pi-server"
        },
        {
            title: "PaaS",
            description: "Platform as a Service for streamlined development.",
            icon: "pi pi-box"
        },
        {
            title: "SaaS",
            description: "Software as a Service implementation and management.",
            icon: "pi pi-window-maximize"
        }
    ];

    const platforms = [
        {
            title: "Amazon Web Services",
            description: "Full suite of AWS cloud services and solutions",
            icon: "pi pi-cloud"
        },
        {
            title: "Microsoft Azure",
            description: "Enterprise-grade Azure cloud implementations",
            icon: "pi pi-microsoft"
        },
        {
            title: "Google Cloud",
            description: "GCP solutions for modern cloud computing",
            icon: "pi pi-google"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-[100px]">
            {/* Hero Section */}
            <div className="bg-[#000756] text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Deployment</h1>
                            <p className="text-lg leading-relaxed">
                                Seamless cloud migration and management services. We help you leverage the power 
                                of cloud computing for better scalability and efficiency.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                <i className="pi pi-cloud absolute text-white/10" 
                                   style={{ fontSize: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cloud Services Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#000756] mb-12">Our Cloud Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cloudServices.map((service, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-center mb-4">
                                    <i className={`${service.icon} text-[#1DBA57]`} style={{ fontSize: '3rem' }}></i>
                                </div>
                                <h3 className="text-xl font-bold text-[#000756] text-center mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Platforms Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-[#000756] to-[#1DBA57] p-12 rounded-lg text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">Cloud Platforms</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {platforms.map((platform, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <h3 className="text-xl font-bold mb-4">{platform.title}</h3>
                                    <p>{platform.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#000756] mb-12">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Scalability</h3>
                            <p className="text-gray-600">Easily scale resources up or down as needed</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Cost Optimization</h3>
                            <p className="text-gray-600">Pay only for the resources you use</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Security</h3>
                            <p className="text-gray-600">Enhanced security measures and compliance</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Reliability</h3>
                            <p className="text-gray-600">24/7 monitoring and support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}