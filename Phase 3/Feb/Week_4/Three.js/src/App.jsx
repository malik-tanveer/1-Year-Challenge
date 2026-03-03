import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <div className="bg-[#0f0f0f] min-h-screen text-white">
      <Navbar />

      {/* Page Content Wrapper */}
      <main className="pt-24">
        
        {/* Hero Section (temporary placeholder) */}
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            Full Stack Developer
          </h1>
        </section>

      </main>
    </div>
    </>
  )
}

export default App
