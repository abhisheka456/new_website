// components/sections/Research.tsx
const Research = () => (
  <section className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-purple-500/20">
    <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-300">Research Interests</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/30 dark:to-gray-800 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-800/50 transition-transform hover:-translate-y-2">
        <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4">
          <div className="h-8 w-8 bg-indigo-600 dark:bg-indigo-300 rounded-full"></div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-200">Ethical AI</h3>
        <p className="dark:text-gray-300">
          Developing frameworks for responsible AI deployment and addressing algorithmic bias.
        </p>
      </div>
      
      <div className="bg-gradient-to-br from-pink-50 to-white dark:from-pink-900/30 dark:to-gray-800 rounded-2xl p-6 border border-pink-100 dark:border-pink-800/50 transition-transform hover:-translate-y-2">
        <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mb-4">
          <div className="h-8 w-8 bg-pink-600 dark:bg-pink-300 rounded-full"></div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-pink-700 dark:text-pink-200">Explainable AI</h3>
        <p className="dark:text-gray-300">
          Creating interpretable ML models for critical decision-making systems.
        </p>
      </div>
      
      <div className="bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/30 dark:to-gray-800 rounded-2xl p-6 border border-teal-100 dark:border-teal-800/50 transition-transform hover:-translate-y-2">
        <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-4">
          <div className="h-8 w-8 bg-teal-600 dark:bg-teal-300 rounded-full"></div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-teal-700 dark:text-teal-200">Human-AI Collaboration</h3>
        <p className="dark:text-gray-300">
          Designing AI systems that enhance human capabilities in creative tasks.
        </p>
      </div>
    </div>
  </section>
);

export default Research;