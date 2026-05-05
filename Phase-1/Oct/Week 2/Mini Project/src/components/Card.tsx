import React from "react";

const Card = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center hover:scale-105 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
        {value}
      </p>
    </div>
  );
};

export default Card;
