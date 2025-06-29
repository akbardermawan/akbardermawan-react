import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ key, index, service }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-md p-4 mb-4"
    >
      <div className="flex items-center justify-between border-b pb-3">
        <div className="flex items-center gap-4">
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="font-semibold text-xl text-blue-700">
              {service.title}
            </h4>
          </div>
        </div>
      </div>
      {/* Skill list */}
      <div className="mt-2 flex flex-wrap gap-2">
        {service.skill?.map((s, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-800 hover:text-white"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
