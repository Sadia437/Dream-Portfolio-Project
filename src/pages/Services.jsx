import React from 'react';

import ServiceListSection from '../components/services/ServiceListSection';
import PricingSection from '../components/services/PricingSection';
import TestimonialsSection from '../components/services/TestimonialsSection';

export default function Services() {
    return (
        <div>
            <ServiceListSection />
            <PricingSection />
            <TestimonialsSection />
        </div>
    );
}
