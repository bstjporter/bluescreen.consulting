'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            if (isMobileMenuOpen) {
                                    setIsMobileMenuOpen(false);
                setIsServicesOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);

    const services = [
        { title: 'Web Design', path: '/services/web-design' },
        { title: 'Call Center', path: '/services/call-center' },
        { title: 'Cloud Deployment', path: '/services/cloud-deployment' },
        { title: 'IT Management', path: '/services/it-management' },
        { title: 'Social Media', path: '/services/social-media' },
        { title: 'Media Services', path: '/services/media-services' },
        { title: 'Project Implementation', path: '/services/project-implementation' },
        { title: 'App Design', path: '/services/app-design' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
            isScrolled || !isHomePage ? 'bg-[#000756]' : 'bg-transparent'
                                }`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="md:hidden">
                    <div className="flex items-center justify-between h-[50px]">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`text-xl ${
                                isScrolled || !isHomePage ? 'text-white' : 'text-[#000756]'
                            }`}
                        >
                            <i className="pi pi-bars"></i>
                        </button>
                    <button onClick={() => router.push('/')} className="relative w-[50px] h-[50px]">
                            <Image
                                src={isScrolled || !isHomePage ? "/img/bsc-logo-white.png" : "/img/bsc-logo.png"}
                                alt="BlueScreen Consulting Logo"
                                fill
                            className="object-contain"
                            style={{ padding: 0 }}
                        />
                    </button>
                    <div className="w-[50px]"></div>
                                </div>

                    <div 
                        className={`fixed left-0 right-0 bg-[#000756] transition-all duration-300 ${
                            isMobileMenuOpen 
                                ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-full'
                        }`} 
                        style={{ top: '50px' }}
                            >
                        <div className="px-4 py-6 space-y-4">
                            <div className="space-y-2">
                                <button 
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="w-full text-left py-2 text-base font-bold text-white flex items-center justify-between"
                                >
                                    SERVICES
                                    <i className={`pi ${isServicesOpen ? 'pi-chevron-up' : 'pi-chevron-down'} text-white`}></i>
                                </button>
                                <div className={`pl-4 space-y-2 transition-all duration-300 ${
                                    isServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                }`}>
                                    {services.map((service, index) => (
                                        <button 
                                            key={index}
                                            onClick={() => {
                                                router.push(service.path);
                                setIsMobileMenuOpen(false);
                            }}
                                            className="w-full text-left py-1.5 text-sm text-white/80"
                        >
                                            {service.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <button 
                                onClick={() => {
                                    router.push('/portfolio');
                                setIsMobileMenuOpen(false);
                            }}
                                className="w-full text-left py-2 text-base font-bold text-white"
                        >
                                PORTFOLIO
                        </button>
                            <button 
                                onClick={() => {
                                    router.push('/about');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full text-left py-2 text-base font-bold text-white"
                            >
                                ABOUT
                            </button>
                            <button 
                                onClick={() => {
                                    router.push('/contact');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full text-left py-2 text-base font-bold text-white"
                            >
                                CONTACT
                            </button>
                            <button 
                                onClick={() => {
                                    router.push('/contact');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full bg-white text-[#000756] py-2 rounded-full font-bold text-center mt-6"
                            >
                                Get a Quote
                            </button>
            </div>
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-between h-[100px]">
                    <div className="w-[285px]">
                        <button onClick={() => router.push('/')} className="relative w-[249px] h-[70px]">
                            <Image 
                            src={isScrolled || !isHomePage ? "/img/logo/bsc-logo-white-nopad.png" : "/img/logo/bsc-logo-nopad.png"}
                            alt="BlueScreen Consulting Logo"
                            fill
                            className="object-contain"
                            style={{ padding: 0 }}
                        />
                    </button>
                                </div>

                    <div className="flex-1 flex justify-center items-center gap-8">
                        <div className="relative group">
                            <button 
                                className={`text-lg font-bold ${
                                    isScrolled || !isHomePage ? 'text-white' : 'text-[#000756]'
                                } hover:opacity-80 transition-colors flex items-center gap-1`}
                            >
                                SERVICES
                                <i className="pi pi-chevron-down text-sm"></i>
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                {services.map((service, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => router.push(service.path)}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        {service.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button 
                            onClick={() => router.push('/portfolio')}
                            className={`text-lg font-bold ${
                                isScrolled || !isHomePage ? 'text-white' : 'text-[#000756]'
                            } hover:opacity-80 transition-colors`}
                    >
                            PORTFOLIO
                    </button>
                        <button 
                            onClick={() => router.push('/about')}
                            className={`text-lg font-bold ${
                                isScrolled || !isHomePage ? 'text-white' : 'text-[#000756]'
                            } hover:opacity-80 transition-colors`}
                        >
                            ABOUT
                        </button>
                        <button 
                            onClick={() => router.push('/contact')}
                            className={`text-lg font-bold ${
                                isScrolled || !isHomePage ? 'text-white' : 'text-[#000756]'
                            } hover:opacity-80 transition-colors`}
                        >
                            CONTACT
                        </button>
                    </div>

                    <div className="w-[200px] flex justify-end">
                        <button 
                            onClick={() => router.push('/contact')}
                            className={`bg-[#1DBA57] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 quote-button ${
                                isScrolled || !isHomePage ? 'opacity-100 visible' : 'opacity-0 invisible'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span>Get a Quote</span>
                                <Image
                                    src="/ico/pencil-doc.svg"
                                    alt="Get a Quote"
                                    width={24}
                                    height={24}
                                />
                </div>
                        </button>
            </div>
                </div>
            </div>
        </nav>
    );
}