const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <p className="text-gray-300 mb-10">
          If you have any questions, suggestions, or want to collaborate,
          feel free to reach out using the form below.
        </p>

        <form className="bg-slate-800 p-8 rounded-xl space-y-6">
          
          <div>
            <label className="block mb-2 text-sm">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-slate-700 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-slate-700 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded bg-slate-700 focus:outline-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold">
            Send Message
          </button>

        </form>
      </div>

    </div>
  );
};

export default Contact;
