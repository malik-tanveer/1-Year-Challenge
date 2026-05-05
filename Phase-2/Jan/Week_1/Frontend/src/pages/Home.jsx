const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to My App
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          This is a simple frontend application built with React, Tailwind CSS,
          and React Router. Later this will connect with a Dockerized backend.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-800">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Features
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-slate-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Fast</h3>
            <p className="text-gray-300">
              Optimized React components with modern tooling and clean structure.
            </p>
          </div>

          <div className="bg-slate-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Scalable</h3>
            <p className="text-gray-300">
              Designed to scale using Docker, cloud services, and CI/CD pipelines.
            </p>
          </div>

          <div className="bg-slate-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Secure</h3>
            <p className="text-gray-300">
              Environment variables, best practices, and production-ready setup.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
