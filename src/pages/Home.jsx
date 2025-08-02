import React from 'react';

import HeroSection from '../components/home/HeroSection';
import AboutMeSection from '../components/home/AboutMeSection';
import SkillsSection from '../components/home/SkillsSection';
import ServicesSection from '../components/home/ServicesSection';
import PortfolioPreviewSection from '../components/home/PortfolioPreviewSection';

import CallToActionSection from '../components/home/CallToActionSection';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutMeSection />
            <SkillsSection />
            <ServicesSection />
            <PortfolioPreviewSection />

            <CallToActionSection />
        </div>
    );
}
