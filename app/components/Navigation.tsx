'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold" onClick={closeMenu}>
            Mathwi
          </Link>

          {/* PC용 메뉴 */}
          <div className="hidden md:flex space-x-8">
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

          {/* 모바일용 햄버거 버튼 */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일용 드롭다운 메뉴 */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900" onClick={closeMenu}>
              Project
            </Link>
            <Link href="/seminars" className="text-gray-600 hover:text-gray-900" onClick={closeMenu}>
              Seminar
            </Link>
            <Link href="/paper" className="text-gray-600 hover:text-gray-900" onClick={closeMenu}>
              Paper
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-gray-900" onClick={closeMenu}>
              News
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 