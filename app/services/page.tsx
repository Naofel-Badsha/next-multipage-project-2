import React from 'react';
import ServicesBanner from './ServicesSection/ServicesBanner';
import ServicesProperty from './ServicesSection/ServicesProperty';
import ChooseServices from './ServicesSection/ChooseServices';
import ClientsReviews from './ServicesSection/ClientsReviews';


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