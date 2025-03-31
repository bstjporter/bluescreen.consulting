'use client';
import Image from 'next/image';

export default function About() {
    const coreValues = [
        {
            title: "Innovation",
            description: "We constantly seek out cutting-edge solutions to provide our clients with the most advanced technologies and services.",
            icon: "pi pi-bolt"
        },
        {
            title: "Integrity",
            description: "Honesty, transparency, and reliability are at the heart of everything we do.",
            icon: "pi pi-shield"
        },
        {
            title: "Customer-Centric",
            description: "We prioritize the success and satisfaction of our clients, treating each partnership with care and dedication.",
            icon: "pi pi-users"
        },
        {
            title: "Excellence",
            description: "We strive to exceed expectations and deliver exceptional results in every project we undertake.",
            icon: "pi pi-star"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-[100px]">
            {/* Hero Section */}
            <div className="bg-[#000756] text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
                        Our Story
                    </h1>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                <Image
                                    src="/img/logo/logohistory.png"
                                    alt="BlueScreen Logo History"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <p className="text-lg text-justify leading-relaxed">
                                Founded in the year 2000, as BlueScreen Technologies, BlueScreen Consulting began its journey as a pioneer in web design, crafting creative solutions for businesses in a rapidly evolving digital landscape. Over the years, we've grown far beyond our roots, expanding to offer a comprehensive range of IT services tailored to the needs of companies and organizations of any size.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-[#000756] to-[#1DBA57] p-12 rounded-lg text-white text-center">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                            Based in the "Silicon Heartland" of Ohio, we are proud to call this innovative hub our home. Our mission has remained steadfast from the very beginning: to "future-proof" our clients. Staying ahead of trends and embracing emerging technologies, we ensure our customers are not only prepared for the challenges of today but also equipped to seize the opportunities of tomorrow.
                        </p>
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#000756] mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-center mb-4">
                                    <i className={`${value.icon} text-[#1DBA57]`} style={{ fontSize: '3rem' }}></i>
                                </div>
                                <h3 className="text-xl font-bold text-[#000756] text-center mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Closing Section */}
            <div className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <p className="text-lg text-gray-700 mb-8">
                        We believe in building lasting partnerships by delivering exceptional care, unmatched expertise, and customized solutions. Whether you're a small business seeking guidance or a large enterprise navigating complex IT infrastructures, our team is here to support and empower your success.
                    </p>
                    <p className="text-2xl font-bold text-[#000756]">
                        Join us as we continue shaping the future of IT, together.
                    </p>
                </div>
            </div>
        </div>
    );
}
