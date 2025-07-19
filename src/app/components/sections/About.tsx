// components/sections/About.tsx
const About = () => (
  <section className="bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-indigo-900 rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-purple-500/20">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full md:w-48 h-48 flex-shrink-0" />
      <div>
        <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-cyan-300">About Me</h2>
        <p className="mb-4 dark:text-gray-300">
          I am an Assistant Professor specializing in Artificial Intelligence and Machine Learning.
          My research focuses on ethical AI, neural network interpretability, and human-AI collaboration.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/70 text-indigo-700 dark:text-indigo-200">
            Machine Learning
          </span>
          <span className="px-4 py-1 rounded-full bg-pink-100 dark:bg-pink-900/70 text-pink-700 dark:text-pink-200">
            AI Ethics
          </span>
          <span className="px-4 py-1 rounded-full bg-amber-100 dark:bg-amber-900/70 text-amber-700 dark:text-amber-200">
            HCI
          </span>
          <span className="px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/70 text-emerald-700 dark:text-emerald-200">
            NLP
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default About;