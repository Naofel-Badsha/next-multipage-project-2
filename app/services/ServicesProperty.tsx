import React from "react";
import { Home, Building2, Users, Wallet, Icon } from "lucide-react";
const ServicesProperty = () => {
  const services = [
    {
      id: 1,
      icon: Home,
      title: "Property Management",
      description:
        "Comprehensive property management services including maintenance, tenant screening, and rent collection.",
      features: ["24/7 Maintenance", "Tenant Screening", "Rent Collection"],
    },
    {
      id: 2,
      icon: Building2,
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
      icon: Users,
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
      icon: Wallet,
      title: "Financial Management",
      description:
        "Accurate financial tracking and reporting to keep your property investments profitable.",
      features: ["Monthly Reports", "Expense Tracking", "Online Payments"],
    },
  ];
  return (
    <section>
      <div>
        <div>
          {services.map((service) => {
            return(
                <div key={service.id}>
              <h1>{service.title}</h1>
              <Icon size={32} />
            </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesProperty;
