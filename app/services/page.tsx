import React from 'react';
import ServicesBanner from './ServicesBanner';
import ServicesProperty from './ServicesProperty';
import ChooseServices from './ChooseServices';
import ClientsReviews from './ClientsReviews';

const ServicesPage = () => {
    return (
        <div>
            <ServicesBanner />
            <ServicesProperty />
            <ChooseServices />
            <ClientsReviews />
        </div>
    );
};

export default ServicesPage;