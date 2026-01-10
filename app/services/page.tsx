import React from 'react';
import ServicesBanner from './ServicesBanner';
import ServicesProperty from './ServicesProperty';
import ChooseServices from './ChooseServices';

const ServicesPage = () => {
    return (
        <div>
            <ServicesBanner />
            <ServicesProperty />
            <ChooseServices />
        </div>
    );
};

export default ServicesPage;