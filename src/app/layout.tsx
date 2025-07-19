// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Jane Smith - Assistant Professor',
  description: 'Academic homepage of Dr. Jane Smith, Assistant Professor of Computer Science',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-cyan-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 transition-colors duration-500`}>
        {children}
      </body>
    </html>
  );
}