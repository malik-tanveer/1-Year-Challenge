"use client";

export default function Card({ name, role, company, details }) {
    return (
        <div className=" shadow-md rounded-xl p-5 border hover:shadow-lg transition">
            
            <h1 className="text-xl font-bold mb-1">
                {name}
            </h1>

            <p className="text-gray-700 font-medium mb-1">
                {role}
            </p>

            <p className="text-blue-600 mb-3">
                {company}
            </p>

            <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                {details.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    );
}