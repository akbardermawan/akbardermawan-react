import React from "react";
import { motion } from "framer-motion";
import ElectricBorder from "./about/electricborder/ElectricBorder";

const ServiceCard = ({ index, service }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <ElectricBorder
        color="#0097F5"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
      >
        <div className="rounded-lg shadow-md p-4 mb-2">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 rounded object-cover"
              />
              <div>
                <h4 className="font-semibold text-xl text-white">
                  {service.title}
                </h4>
              </div>
            </div>
          </div>
          {/* Skill list */}
          <div className="mt-2 flex flex-wrap gap-2 p-1">
            {service.skill?.map((s, i) => (
              <span
                key={i}
                className="bg-gray-900/50 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-sky-800 hover:text-white"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </ElectricBorder>
    </motion.div>
  );
};

export default ServiceCard;
