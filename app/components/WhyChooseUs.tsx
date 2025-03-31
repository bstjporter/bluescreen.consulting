'use client';
import Image from 'next/image';

export default function WhyChooseUs() {
    const reasons = [
        {
            title: "Experience & Expertise",
            description: "With over 15 years in the industry, we've successfully delivered hundreds of IT solutions across diverse business sectors."
        },
        {
            title: "Customized Solutions",
            description: "We understand that every business is unique. Our solutions are tailored to meet your specific needs and challenges."
        },
        {
            title: "Dedicated Support",
            description: "Our team provides round-the-clock support, ensuring your systems run smoothly and issues are resolved promptly."
        },
        {
            title: "Innovation Focus",
            description: "We stay ahead of technology trends, bringing cutting-edge solutions that give your business a competitive advantage."
        }
    ];

    return (
        <section className="w-full py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#000756] mb-16">
                    Why Choose BlueScreen?
                </h2>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="text-2xl font-bold text-[#000756] mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Letter from Owner */}
                <div className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-sm">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="w-full md:w-1/4 flex justify-center">
                            <div className="relative w-48 h-48 rounded-full overflow-hidden">
                                <Image
                                    src="/img/staff/person-placeholder.jpg"
                                    alt="Jonathan Porter, Founder/CEO"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-3/4">
                            <h3 className="text-3xl font-bold text-[#000756] mb-6">
                                A Message from Our Founder
                            </h3>
                            <div className="space-y-4 text-lg text-justify text-gray-700">
                                <p>
                                    &quot;When I founded BlueScreen Consulting, I had one mission in mind: to make 
                                    enterprise-level IT solutions accessible to businesses and organizations of 
                                    all sizes. Today, that mission continues to drive everything we do.
                                </p>
                                <p>
                                    We&apos;ve built our reputation on understanding not just technology, but the 
                                    people who use it. Our team doesn&apos;t just implement solutions – we partner 
                                    with our clients to transform their businesses through technology.
                                </p>
                                <p>
                                    Whether you&apos;re a small business looking to optimize your IT infrastructure, 
                                    a non-profit organization seeking to enhance your digital presence, 
                                    or a large enterprise seeking digital transformation, we&apos;re here to help 
                                    you succeed in an increasingly digital world.&quot;
                                </p>
                                <div className="pt-4 pr-10 float-right text-right">
                                    <div className="relative w-48 h-48 mb-4 mx-auto">
                                        <Image
                                            src="/img/content/owner-signature.png"
                                            alt="Jonathan Porter Signature"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="font-bold text-[#000756]">Jonathan Porter</p>
                                    <p className="text-gray-600">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}