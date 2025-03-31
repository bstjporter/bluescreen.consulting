'use client';
import Image from 'next/image';
export default function ProjectImplementation() {
    const implementationSteps = [
        {
            title: "Project Scoping",
            description: "Detailed planning and requirement analysis.",
            icon: "pi pi-file-edit"
        },
        {
            title: "Resource Allocation",
            description: "Strategic allocation of project resources.",
            icon: "pi pi-users"
        },
        {
            title: "Risk Assessment",
            description: "Comprehensive risk analysis and mitigation.",
            icon: "pi pi-shield"
        },
        {
            title: "Implementation",
            description: "Systematic execution and deployment.",
            icon: "pi pi-cog"
        }
    ];

    const projectTypes = [
        {
            title: "System Migrations",
            description: "Seamless system upgrades and migrations",
            icon: "pi pi-sync"
        },
        {
            title: "Infrastructure",
            description: "Complete infrastructure deployments",
            icon: "pi pi-server"
        },
        {
            title: "Digital Transformation",
            description: "End-to-end digital transformation initiatives",
            icon: "pi pi-refresh"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-[100px]">
            {/* Hero Section */}
            <div className="bg-[#000756] text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Implementation</h1>
                            <p className="text-lg leading-relaxed">
                                Expert project management and execution of IT initiatives, from planning 
                                to deployment, ensuring successful digital transformation.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                <i className="pi pi-chart-line absolute text-white/10" 
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

            {/* Project Types Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-[#000756] to-[#1DBA57] p-12 rounded-lg text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">Project Types</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {projectTypes.map((type, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                                    <p>{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Benefits Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#000756] mb-12">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Expert Management</h3>
                            <p className="text-gray-600">Professional project management expertise</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">On-Time Delivery</h3>
                            <p className="text-gray-600">Projects completed within timeline and budget</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#000756] mb-4">Quality Assurance</h3>
                            <p className="text-gray-600">Rigorous testing and quality control</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}