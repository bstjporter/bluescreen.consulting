'use client';
import Image from 'next/image';
export default function CallCenter() {
    const implementationSteps = [
        {
            title: "Requirements Analysis",
            description: "Detailed analysis of your call center needs.",
            icon: "pi pi-file-edit"
        },
        {
            title: "Infrastructure Setup",
            description: "Complete setup of call center infrastructure.",
            icon: "pi pi-server"
        },
        {
            title: "Staff Training",
            description: "Comprehensive training and documentation.",
            icon: "pi pi-users"
        },
        {
            title: "Quality Assurance",
            description: "Rigorous testing and quality control.",
            icon: "pi pi-check-circle"
        }
    ];

    const features = [
        {
            title: "Call Routing",
            description: "Advanced IVR and intelligent call routing systems",
            icon: "pi pi-sitemap"
        },
        {
            title: "CRM Integration",
            description: "Seamless integration with major CRM platforms",
            icon: "pi pi-database"
        },
        {
            title: "Analytics",
            description: "Real-time monitoring and detailed analytics",
            icon: "pi pi-chart-bar"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-[100px]">
            {/* Hero Section */}
            <div className="bg-[#000756] text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Call Center Implementation</h1>
                            <p className="text-lg leading-relaxed">
                                End-to-end call center solutions including software integration, training, 
                                and optimization for maximum customer satisfaction.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                <i className="pi pi-phone absolute text-white/10" 
                                   style={{ fontSize: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Implementation Process Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#000756] mb-12">Implementation Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {implementationSteps.map((step, index) => (
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

            {/* Features Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-[#000756] to-[#1DBA57] p-12 rounded-lg text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#000756] mb-12">Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Customer Satisfaction</h3>
                            <p className="text-gray-600">Improved customer experience and satisfaction</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Efficiency</h3>
                            <p className="text-gray-600">Increased operational efficiency</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Resource Utilization</h3>
                            <p className="text-gray-600">Better resource management and allocation</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Scalability</h3>
                            <p className="text-gray-600">Easy scaling as your business grows</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}