'use client';

import React from 'react';
import Link from 'next/link';

const AdminPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">관리자 페이지</h1>
      <p className="mb-8">이곳에서 프로젝트, 세미나, 페이퍼 등 웹사이트의 콘텐츠를 관리할 수 있습니다.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/projects" className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
          <h2 className="text-2xl font-bold">Project 관리</h2>
          <p>프로젝트 정보 수정 및 추가</p>
        </Link>
        <Link href="/admin/seminars" className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition-colors">
          <h2 className="text-2xl font-bold">Seminar 관리</h2>
          <p>세미나 정보 수정 및 추가</p>
        </Link>
        <Link href="/admin/papers" className="bg-indigo-500 text-white p-6 rounded-lg shadow-md hover:bg-indigo-600 transition-colors">
          <h2 className="text-2xl font-bold">Paper 관리</h2>
          <p>논문 정보 수정 및 추가</p>
        </Link>
        <Link href="/admin/news" className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:bg-yellow-600 transition-colors">
          <h2 className="text-2xl font-bold">News 관리</h2>
          <p>뉴스 정보 수정 및 추가</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage; 