'use client';
import Image from 'next/image';
export default function MediaServices() {
    const productionServices = [
        {
            title: "Video Production",
            description: "Professional video creation and editing for all your needs.",
            icon: "pi pi-video"
        },
        {
            title: "Photography",
            description: "High-quality photography services for various purposes.",
            icon: "pi pi-camera"
        },
        {
            title: "Animation",
            description: "Creative animation and motion graphics production.",
            icon: "pi pi-images"
        },
        {
            title: "Audio",
            description: "Professional audio production and sound design.",
            icon: "pi pi-volume-up"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-[100px]">
            {/* Hero Section */}
            <div className="bg-[#000756] text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Services</h1>
                            <p className="text-lg leading-relaxed">
                                Professional media production, including video creation, editing, and digital 
                                content development for all your marketing needs.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                <i className="pi pi-camera absolute text-white/10" 
                                   style={{ fontSize: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#000756] mb-12">Production Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {productionServices.map((service, index) => (
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

            {/* Content Types Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-[#000756] to-[#1DBA57] p-12 rounded-lg text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">Content Types</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">Corporate Videos</h3>
                                <p>Professional videos for business presentations and marketing</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">Training Materials</h3>
                                <p>Educational content and instructional videos</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">Marketing Content</h3>
                                <p>Engaging content for social media and digital marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#000756] mb-12">Why Choose Our Media Services?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Professional Equipment</h3>
                            <p className="text-gray-600">State-of-the-art equipment and studio facilities</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Expert Team</h3>
                            <p className="text-gray-600">Experienced creative professionals</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Quick Turnaround</h3>
                            <p className="text-gray-600">Fast delivery without compromising quality</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}