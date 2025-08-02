import React from 'react';
import AboutMeSection from '../components/about/AboutMeSection';
import ExperienceSection from '../components/about/ExperienceSection';
import EducationSection from '../components/about/EducationSection';

export default function About() {
    return (
        <div>
            <AboutMeSection />
            <ExperienceSection />
            <EducationSection />
        </div>
    );
}
