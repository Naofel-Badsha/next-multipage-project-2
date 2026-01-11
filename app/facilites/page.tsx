import React from 'react';
import FacilitesBanner from './FacilitesSection/FacilitesBanner';
import BasicAmenities from './FacilitesSection/BasicAmenities';
import RecreationalFacilities from './FacilitesSection/RecreationalFacilities';
import HomeComforts from './FacilitesSection/HomeComforts';

const FacilitesPage = () => {
    return (
        <div>
           <FacilitesBanner />
           <BasicAmenities />
           <RecreationalFacilities />
           <HomeComforts />
        </div>
    );
};

export default FacilitesPage;