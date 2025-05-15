import React from "react";

const ServiceCard = ({ key, index, service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-4">
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="font-semibold text-lg">{service.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
