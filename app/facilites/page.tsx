import React from 'react';
import FacilitesBanner from './FacilitesSection/FacilitesBanner';
import BasicAmenities from './FacilitesSection/BasicAmenities';
import RecreationalFacilities from './FacilitesSection/RecreationalFacilities';

const FacilitesPage = () => {
    return (
        <div>
           <FacilitesBanner />
           <BasicAmenities />
           <RecreationalFacilities />
        </div>
    );
};

export default FacilitesPage;