// components/sections/Publications.tsx
const Publications = () => (
  <section className="bg-gradient-to-br from-white to-emerald-50 dark:from-gray-800 dark:to-emerald-900/20 rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-emerald-500/20">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-300">Recent Publications</h2>
      <a href="#" className="text-emerald-600 dark:text-emerald-300 hover:underline font-medium">View All →</a>
    </div>
    
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-white to-emerald-50 dark:from-gray-800 dark:to-emerald-900/10 rounded-xl p-6 border-l-4 border-emerald-500 transition-all hover:shadow-lg">
        <h3 className="font-bold text-xl mb-2 dark:text-white">Towards Bias-Free Machine Learning: A Comprehensive Framework</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3">Smith, J., Johnson, M., & Williams, R.</p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-200 text-sm">
            Journal of AI Research
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-200 text-sm">
            2023
          </span>
        </div>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-emerald-600 dark:text-emerald-300 hover:underline font-medium">
            Read Paper →
          </a>
          <a href="#" className="text-emerald-600 dark:text-emerald-300 hover:underline font-medium">
            View Code
          </a>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-white to-emerald-50 dark:from-gray-800 dark:to-emerald-900/10 rounded-xl p-6 border-l-4 border-emerald-500 transition-all hover:shadow-lg">
        <h3 className="font-bold text-xl mb-2 dark:text-white">Interpretable Neural Networks for Medical Diagnosis</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3">Smith, J., Chen, L., & Davis, K.</p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-200 text-sm">
            NeurIPS
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-200 text-sm">
            2022
          </span>
        </div>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-emerald-600 dark:text-emerald-300 hover:underline font-medium">
            Read Paper →
          </a>
          <a href="#" className="text-emerald-600 dark:text-emerald-300 hover:underline font-medium">
            View Dataset
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Publications;