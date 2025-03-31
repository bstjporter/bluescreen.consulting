'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#000756] text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Payment Options */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="p-2 rounded-md w-12 h-8 flex items-center justify-center">
                                <Image 
                                    src="/img/visa.png" 
                                    alt="Visa" 
                                    width={50} 
                                    height={50}
                                />
                            </div>
                            <div className="p-2 rounded-md w-12 h-8 flex items-center justify-center">
                                <Image 
                                    src="/img/mastercard.png" 
                                    alt="Mastercard" 
                                    width={50} 
                                    height={50}
                                />
                            </div>
                            <div className="p-2 rounded-md w-12 h-8 flex items-center justify-center">
                                <Image 
                                    src="/img/amex.png" 
                                    alt="American Express" 
                                    width={50} 
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Policies & Terms */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Policies & Terms</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-gray-300 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund-policy" className="hover:text-gray-300 transition-colors">
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookie-policy" className="hover:text-gray-300 transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <i className="pi pi-phone"></i>
                                <span>317-921-5272</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="pi pi-envelope"></i>
                                <span>contact@bluescreen.consulting</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-gray-300 transition-colors">
                                <i className="pi pi-facebook text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-colors">
                                <i className="pi pi-twitter text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-colors">
                                <i className="pi pi-linkedin text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-colors">
                                <i className="pi pi-instagram text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
                        <p>© {currentYear} BlueScreen Consulting. All rights reserved.</p>
                        <p className="mt-2 md:mt-0">
                            Designed and Developed by BlueScreen Consulting
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}