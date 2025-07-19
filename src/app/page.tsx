export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-indigo-800 mb-6">
            Assistant Processor
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            A powerful AI assistant that helps you process information faster and more efficiently.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-6 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
