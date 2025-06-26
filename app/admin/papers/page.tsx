'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Paper {
  title: string;
  description: string;
  authors: string[];
  image: string;
}

const PapersAdminPage = () => {
  const [papers, setPapers] = useState<Paper[]>([]);

  useEffect(() => {
    fetch('/api/papers')
      .then(res => res.json())
      .then(data => setPapers(data));
  }, []);

  const handleDelete = async (index: number) => {
    if (confirm('정말로 이 페이퍼를 삭제하시겠습니까?')) {
      await fetch(`/api/papers/${index}`, {
        method: 'DELETE',
      });
      const res = await fetch('/api/papers');
      const data = await res.json();
      setPapers(data);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">페이퍼 관리</h1>
        <Link href="/admin/papers/new" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
          새 페이퍼 추가
        </Link>
      </div>
      
      <div className="bg-white shadow-md rounded-lg">
        <ul className="divide-y divide-gray-200">
          {papers.map((paper, index) => (
            <li key={index} className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{paper.title}</h2>
                <p className="text-gray-600">{paper.authors.join(', ')}</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/papers/edit/${index}`} className="text-blue-500 hover:underline">
                  수정
                </Link>
                <button onClick={() => handleDelete(index)} className="text-red-500 hover:underline">삭제</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PapersAdminPage; 