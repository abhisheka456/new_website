// components/sections/Footer.tsx
const Footer = () => (
  <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-700 mt-16">
    <p className="text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} Dr. Jane Smith. All rights reserved.
    </p>
    <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
      Designed with Next.js and Tailwind CSS
    </p>
  </footer>
);

export default Footer;