'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const NewPaperPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authors, setAuthors] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await fetch('/api/papers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, authors: authors.split(','), image }),
    });

    router.push('/admin/papers');
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">새 페이퍼 추가</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">제목</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">설명</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="authors" className="block text-gray-700 font-bold mb-2">저자 (쉼표로 구분)</label>
          <input type="text" id="authors" value={authors} onChange={(e) => setAuthors(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">이미지 경로</label>
          <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">저장</button>
      </form>
    </div>
  );
};

export default NewPaperPage; 