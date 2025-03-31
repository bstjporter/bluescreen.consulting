'use client';
import Image from 'next/image';
export default function ITManagement() {
    const managementServices = [
        {
            title: "Infrastructure Monitoring",
            description: "24/7 monitoring and maintenance of IT infrastructure.",
            icon: "pi pi-chart-line"
        },
        {
            title: "Network Security",
            description: "Comprehensive network security and optimization.",
            icon: "pi pi-shield"
        },
        {
            title: "System Updates",
            description: "Regular system updates and patch management.",
            icon: "pi pi-refresh"
        },
        {
            title: "Help Desk",
            description: "Responsive technical support and assistance.",
            icon: "pi pi-comments"
        }
    ];

    const securityFeatures = [
        {
            title: "Firewall Management",
            description: "Advanced firewall protection and monitoring",
            icon: "pi pi-shield"
        },
        {
            title: "Data Backup",
            description: "Secure data backup and recovery solutions",
            icon: "pi pi-database"
        },
        {
            title: "Security Audits",
            description: "Regular security audits and compliance checks",
            icon: "pi pi-check-square"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-[100px]">
            {/* Hero Section */}
            <div className="bg-[#000756] text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Management</h1>
                            <p className="text-lg leading-relaxed">
                                Comprehensive IT infrastructure management ensuring your systems run smoothly 
                                and securely while maximizing performance.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                <i className="pi pi-cog absolute text-white/10" 
                                   style={{ fontSize: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Management Services Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#000756] mb-12">Management Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {managementServices.map((service, index) => (
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

            {/* Security Features Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-[#000756] to-[#1DBA57] p-12 rounded-lg text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">Security Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {securityFeatures.map((feature, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Advantages Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#000756] mb-12">Advantages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Proactive Maintenance</h3>
                            <p className="text-gray-600">Prevent issues before they impact your business</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Cost Effectiveness</h3>
                            <p className="text-gray-600">Optimize IT spending and reduce operational costs</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Expert Support</h3>
                            <p className="text-gray-600">Access to skilled IT professionals 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}