import React from "react";
import FacilitesBanner from "./FacilitesSection/FacilitesBanner";
import BasicAmenities from "./FacilitesSection/BasicAmenities";
import RecreationalFacilities from "./FacilitesSection/RecreationalFacilities";
import HomeComforts from "./FacilitesSection/HomeComforts";
import VirtualTour from "./FacilitesSection/VirtualTour";
import AdditionalFeatures from "./FacilitesSection/AdditionalFeatures";
import PremiumFacilities from "./FacilitesSection/PremiumFacilities";

const FacilitesPage = () => {
  return (
    <div>
      <FacilitesBanner />
      <BasicAmenities />
      <RecreationalFacilities />
      <HomeComforts />
      <VirtualTour />
      <AdditionalFeatures />
      <PremiumFacilities />
    </div>
  );
};

export default FacilitesPage;
