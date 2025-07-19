// components/sections/Contact.tsx
const Contact = () => (
  <section className="bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-cyan-900/20 rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-cyan-500/20">
    <h2 className="text-3xl font-bold mb-8 text-cyan-700 dark:text-cyan-300">Get In Touch</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <p className="mb-6 text-lg dark:text-cyan-100">
          Interested in collaborating or learning more about my work? Feel free to reach out!
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mr-4">
              <div className="h-6 w-6 bg-cyan-600 dark:bg-cyan-300 rounded"></div>
            </div>
            <div>
              <p className="font-medium dark:text-cyan-100">Email</p>
              <p className="dark:text-cyan-200">jane.smith@university.edu</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mr-4">
              <div className="h-6 w-6 bg-cyan-600 dark:bg-cyan-300 rounded"></div>
            </div>
            <div>
              <p className="font-medium dark:text-cyan-100">Office</p>
              <p className="dark:text-cyan-200">Computer Science Building, Room 312</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mr-4">
              <div className="h-6 w-6 bg-cyan-600 dark:bg-cyan-300 rounded"></div>
            </div>
            <div>
              <p className="font-medium dark:text-cyan-100">Phone</p>
              <p className="dark:text-cyan-200">(123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <form className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 border border-cyan-200 dark:border-cyan-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 border border-cyan-200 dark:border-cyan-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>
          <div>
            <textarea 
              placeholder="Message"
              rows={4}
              className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 border border-cyan-200 dark:border-cyan-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold px-6 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;