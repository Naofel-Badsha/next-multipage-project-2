import React from 'react';

const AdditionalFeatures = () => {
      const adfeatures = [
        {
          id: 1,
          title: "Pet Friendly",
          description: "We welcome your furry friends with dedicated pet areas and amenities.",
        },
        {
          id: 2,
          title: "Green Spaces",
          description: "Beautifully landscaped gardens and outdoor seating areas for relaxation.",
        },
        {
          id: 3,
          title: "Community Events",
          description: "Regular social events and activities to foster community spirit.",
        },
      ];
    return (
    <section className="container mx-auto px-5 py-24">
      <div className="">
        <h1 className="text-3xl pt-4 px-2 text-black font-bold text-center">
      Additional Features
        </h1>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10">
          {adfeatures.map((adfeature) => {
            return (
              <div
                key={adfeature.id}
                className="bg-white p-6 shadow hover:shadow-xl rounded-xl space-y-7 border text-center"
              >
                <h1 className="text-xl font-medium mt-6">{adfeature.title}</h1>
                <p>{adfeature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    );
};

export default AdditionalFeatures;