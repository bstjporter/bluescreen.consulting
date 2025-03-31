'use client';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <WhyChooseUs />
        </div>
    );
}