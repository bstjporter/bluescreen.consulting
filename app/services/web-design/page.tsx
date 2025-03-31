'use client';
import Image from 'next/image';

export default function WebDesign() {
    const processSteps = [
        {
            title: "Initial Consultation",
            description: "We gather requirements and understand your vision through detailed consultation.",
            icon: "pi pi-comments"
        },
        {
            title: "Design Phase",
            description: "Create mockups and prototypes that align with your brand identity.",
            icon: "pi pi-pencil"
        },
        {
            title: "Development",
            description: "Build responsive, user-friendly websites using modern frameworks.",
            icon: "pi pi-code"
        },
        {
            title: "Testing & Optimization",
            description: "Rigorous testing and performance optimization for the best user experience.",
            icon: "pi pi-cog"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-[100px]">
            {/* Hero Section */}
            <div className="bg-[#000756] text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Design Services</h1>
                            <p className="text-lg leading-relaxed">
                                Custom, responsive web solutions tailored to your brand. We create modern, 
                                user-friendly websites that drive engagement and results.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                <i className="pi pi-desktop absolute text-white/10" 
                                   style={{ fontSize: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#000756] mb-12">Our Web Design Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
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

            {/* Technologies Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-[#000756] to-[#1DBA57] p-12 rounded-lg text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">Technologies We Use</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">Modern Frameworks</h3>
                                <p>React, Next.js, and Vue.js for robust and scalable applications</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">Responsive Design</h3>
                                <p>Tailwind CSS and modern CSS features for perfect responsive layouts</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">Performance</h3>
                                <p>Latest optimization techniques and tools for maximum speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#000756] mb-12">Why Choose Our Web Design Services?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Custom Designs</h3>
                            <p className="text-gray-600">Unique designs that perfectly match your brand identity</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">SEO-Friendly</h3>
                            <p className="text-gray-600">Built-in SEO best practices for better visibility</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Ongoing Support</h3>
                            <p className="text-gray-600">Continuous maintenance and updates for your website</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}