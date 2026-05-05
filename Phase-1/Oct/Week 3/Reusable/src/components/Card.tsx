import React from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-72 hover:scale-105 transition duration-300">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-3">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
