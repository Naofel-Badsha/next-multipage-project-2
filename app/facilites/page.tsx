import React from 'react';
import FacilitesBanner from './FacilitesSection/FacilitesBanner';
import BasicAmenities from './FacilitesSection/BasicAmenities';
import RecreationalFacilities from './FacilitesSection/RecreationalFacilities';
import HomeComforts from './FacilitesSection/HomeComforts';
import VirtualTour from './FacilitesSection/VirtualTour';
import AdditionalFeatures from './FacilitesSection/AdditionalFeatures';

const FacilitesPage = () => {
    return (
        <div>
           <FacilitesBanner />
           <BasicAmenities />
           <RecreationalFacilities />
           <HomeComforts />
           <VirtualTour />
           <AdditionalFeatures />
        </div>
    );
};

export default FacilitesPage;