import React from "react";
import { Home, Building2, Users, Wallet, Star } from "lucide-react";
import { FaStar } from "react-icons/fa";
const ServicesProperty = () => {
  const services = [
    {
      id: 1,
      icon: <Home />,
      title: "Property Management",
      description:
        "Comprehensive property management services including maintenance, tenant screening, and rent collection.",
      features: ["24/7 Maintenance", "Tenant Screening", "Rent Collection"],
    },
    {
      id: 2,
      icon: <Building2 />,
      title: "Property Leasing",
      description:
        "End-to-end leasing services to ensure your property is occupied by reliable tenants.",
      features: [
        "Market Analysis",
        "Property Advertising",
        "Lease Documentation",
      ],
    },
    {
      id: 3,
      icon: <Users />,
      title: "Tenant Management",
      description:
        "Professional tenant handling to maintain long-term relationships and satisfaction.",
      features: [
        "Tenant Communication",
        "Issue Resolution",
        "Renewal Management",
      ],
    },
    {
      id: 4,
      icon: <Wallet />,
      title: "Financial Management",
      description:
        "Accurate financial tracking and reporting to keep your property investments profitable.",
      features: ["Monthly Reports", "Expense Tracking", "Online Payments"],
    },
  ];
  return (
    <section className="bg-gradient-to-r from-[#F9FBFC] to-[#FCFDFD]">
      <div className="container mx-auto px-5 py-24">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-white p-6 shadow hover:shadow-xl/5 rounded-xl space-y-7 border"
              >
                <div className="bg-[#ECF1FF] p-4 w-fit flex items-center justify-center rounded-full">
                  <span className="text-blue-500 text-2xl">{service.icon}</span>
                </div>

                <h1 className="text-xl font-medium mt-6">{service.title}</h1>
                <p>{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-[#1f3a8a] text-sm "
                    >
                      <Star className="w-4 h-4 text-blue-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesProperty;
