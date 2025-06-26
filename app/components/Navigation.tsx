'use client';

import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Mathwi
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900">
              Project
            </Link>
            <Link href="/seminars" className="text-gray-600 hover:text-gray-900">
              Seminar
            </Link>
            <Link href="/paper" className="text-gray-600 hover:text-gray-900">
              Paper
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-gray-900">
              News
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 