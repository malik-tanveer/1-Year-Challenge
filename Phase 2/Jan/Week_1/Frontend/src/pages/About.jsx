const About = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white px-6 py-16">
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About This Project</h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          This project is part of a long-term learning challenge where the goal
          is to build real-world full-stack applications using modern tools.
          The frontend is built with React and Tailwind CSS, while the backend
          will be powered by Node.js and Express.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Docker is used to containerize both frontend and backend applications
          to ensure consistent environments across development, testing,
          and production.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Tech Stack
        </h2>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>React + React Router</li>
          <li>Tailwind CSS</li>
          <li>Node.js & Express</li>
          <li>Docker & Docker Compose</li>
          <li>Cloud (AWS / VPS in future)</li>
        </ul>

        <p className="text-gray-400 mt-10">
          This project will continuously evolve with new features and improvements.
        </p>
      </div>

    </div>
  );
};

export default About;
