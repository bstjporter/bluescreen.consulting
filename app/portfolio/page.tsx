'use client';
import Image from 'next/image';

interface PortfolioItem {
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    results: string[];
}

export default function Portfolio() {
    const portfolioItems: PortfolioItem[] = [
        {
            title: "E-Commerce Platform",
            description: "A full-scale e-commerce solution with integrated payment processing and inventory management.",
            image: "/img/portfolio-placeholder.jpg",
            category: "Web Development",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            results: ["200% increase in online sales", "50% reduction in inventory management time", "99.9% uptime"]
        },
        {
            title: "Healthcare Management System",
            description: "Custom healthcare management solution for streamlined patient care and administrative tasks.",
            image: "/img/portfolio-placeholder.jpg",
            category: "IT Solutions",
            technologies: ["Angular", "Python", "PostgreSQL", "Docker"],
            results: ["40% reduction in administrative tasks", "60% faster patient processing", "HIPAA compliant"]
        },
        {
            title: "Social Media Campaign",
            description: "Comprehensive social media campaign that increased client engagement by 150%.",
            image: "/img/portfolio-placeholder.jpg",
            category: "Digital Marketing",
            technologies: ["HootSuite", "Adobe Creative Suite", "Google Analytics"],
            results: ["150% increase in engagement", "200% growth in followers", "45% increase in conversions"]
        },
        {
            title: "Cloud Migration Project",
            description: "Large-scale cloud migration for a financial services company.",
            image: "/img/portfolio-placeholder.jpg",
            category: "Cloud Solutions",
            technologies: ["AWS", "Terraform", "Kubernetes", "Docker"],
            results: ["30% cost reduction", "99.99% system availability", "Zero data loss"]
        },
        {
            title: "Mobile Banking App",
            description: "Secure and user-friendly mobile banking application with biometric authentication.",
            image: "/img/portfolio-placeholder.jpg",
            category: "App Development",
            technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
            results: ["1M+ downloads", "4.8/5 app store rating", "Zero security breaches"]
        },
        {
            title: "IT Infrastructure Overhaul",
            description: "Complete IT infrastructure modernization for a manufacturing company.",
            image: "/img/portfolio-placeholder.jpg",
            category: "IT Management",
            technologies: ["VMware", "Cisco", "Microsoft Azure", "ServiceNow"],
            results: ["40% improved efficiency", "50% reduced downtime", "ROI within 12 months"]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-[#000756] mb-12">
                    Our Portfolio
                </h1>
                <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                    Explore our successful projects and see how we've helped businesses 
                    transform their digital presence and operational efficiency.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-64">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-sm font-semibold text-blue-600">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold text-[#000756] mt-2 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {item.description}
                                </p>
                                
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-[#000756] mb-2">
                                        Technologies Used:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-[#000756] mb-2">
                                        Key Results:
                                    </h4>
                                    <ul className="list-disc list-inside text-gray-600 text-sm">
                                        {item.results.map((result, resultIndex) => (
                                            <li key={resultIndex}>{result}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}