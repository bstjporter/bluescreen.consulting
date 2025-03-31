'use client';
import Image from 'next/image';
export default function SocialMedia() {
    const services = [
        {
            title: "Strategy Development",
            description: "Custom social media strategies for your brand.",
            icon: "pi pi-compass"
        },
        {
            title: "Content Creation",
            description: "Engaging content that resonates with your audience.",
            icon: "pi pi-images"
        },
        {
            title: "Community Management",
            description: "Active engagement with your social community.",
            icon: "pi pi-users"
        },
        {
            title: "Analytics & Reporting",
            description: "Detailed insights and performance tracking.",
            icon: "pi pi-chart-bar"
        }
    ];

    const platforms = [
        {
            title: "Facebook & Instagram",
            description: "Comprehensive Meta platforms management",
            icon: "pi pi-facebook"
        },
        {
            title: "Twitter & LinkedIn",
            description: "Professional and business social presence",
            icon: "pi pi-twitter"
        },
        {
            title: "YouTube & TikTok",
            description: "Video content strategy and management",
            icon: "pi pi-video"
        }
    ];

    const benefits = [
        {
            title: "Brand Awareness",
            description: "Increased visibility and recognition",
            icon: "pi pi-eye"
        },
        {
            title: "Engagement",
            description: "Better audience interaction and loyalty",
            icon: "pi pi-heart"
        },
        {
            title: "Lead Generation",
            description: "Converting followers into customers",
            icon: "pi pi-filter"
        },
        {
            title: "ROI Tracking",
            description: "Measurable results and optimization",
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
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Media Management</h1>
                            <p className="text-lg leading-relaxed">
                                Strategic social media planning, content creation, and engagement management 
                                to build and maintain your brand's online presence.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                <i className="pi pi-share-alt absolute text-white/10" 
                                   style={{ fontSize: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#000756] mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
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
                        <h2 className="text-3xl font-bold mb-8 text-center">Platforms We Manage</h2>
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
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#000756] mb-12">Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-center mb-4">
                                    <i className={`${benefit.icon} text-[#1DBA57]`} style={{ fontSize: '3rem' }}></i>
                                </div>
                                <h3 className="text-xl font-bold text-[#000756] text-center mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}