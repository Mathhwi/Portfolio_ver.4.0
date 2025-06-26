'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface Seminar {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string;
  sourceUrl?: string;
  pdfUrl?: string;
}

const EditSeminarPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [seminar, setSeminar] = useState<Seminar | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/seminars/${id}`)
        .then(res => res.json())
        .then(data => setSeminar(data));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!seminar) return;

    await fetch(`/api/seminars/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(seminar),
    });

    router.push('/admin/seminars');
  };

  if (!seminar) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">세미나 수정</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">제목</label>
          <input type="text" id="title" value={seminar.title} onChange={(e) => setSeminar({...seminar, title: e.target.value})} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">날짜</label>
          <input type="text" id="date" value={seminar.date} onChange={(e) => setSeminar({...seminar, date: e.target.value})} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">요약</label>
          <textarea id="summary" value={seminar.summary} onChange={(e) => setSeminar({...seminar, summary: e.target.value})} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">이미지 경로</label>
          <input type="text" id="image" value={seminar.image || ''} onChange={(e) => setSeminar({...seminar, image: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="sourceUrl" className="block text-gray-700 font-bold mb-2">원본 출처 URL</label>
          <input type="url" id="sourceUrl" value={seminar.sourceUrl || ''} onChange={(e) => setSeminar({...seminar, sourceUrl: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="pdfUrl" className="block text-gray-700 font-bold mb-2">발표 자료 PDF 경로</label>
          <input type="text" id="pdfUrl" value={seminar.pdfUrl || ''} onChange={(e) => setSeminar({...seminar, pdfUrl: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">본문</label>
          <textarea id="content" value={seminar.content} onChange={(e) => setSeminar({...seminar, content: e.target.value})} className="w-full px-3 py-2 border rounded-lg h-40" />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">수정 완료</button>
      </form>
    </div>
  );
};

export default EditSeminarPage; 