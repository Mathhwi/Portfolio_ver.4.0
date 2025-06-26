'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface Paper {
  title: string;
  description: string;
  authors: string[];
  image: string;
}

const EditPaperPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [paper, setPaper] = useState<Paper | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/papers/${id}`)
        .then(res => res.json())
        .then(data => setPaper(data));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paper) return;

    await fetch(`/api/papers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paper),
    });

    router.push('/admin/papers');
  };

  if (!paper) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">페이퍼 수정</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">제목</label>
          <input type="text" id="title" value={paper.title} onChange={(e) => setPaper({...paper, title: e.target.value})} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">설명</label>
          <textarea id="description" value={paper.description} onChange={(e) => setPaper({...paper, description: e.target.value})} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="authors" className="block text-gray-700 font-bold mb-2">저자 (쉼표로 구분)</label>
          <input type="text" id="authors" value={paper.authors.join(',')} onChange={(e) => setPaper({...paper, authors: e.target.value.split(',')})} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">이미지 경로</label>
          <input type="text" id="image" value={paper.image} onChange={(e) => setPaper({...paper, image: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">수정 완료</button>
      </form>
    </div>
  );
};

export default EditPaperPage; 