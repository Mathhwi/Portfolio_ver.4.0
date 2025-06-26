'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const NewSeminarPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await fetch('/api/seminars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: Date.now().toString(), title, date, summary, image, content, sourceUrl, pdfUrl }),
    });

    router.push('/admin/seminars');
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">새 세미나 추가</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">제목</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">날짜</label>
          <input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">요약</label>
          <textarea id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">이미지 경로</label>
          <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="sourceUrl" className="block text-gray-700 font-bold mb-2">원본 출처 URL</label>
          <input type="url" id="sourceUrl" value={sourceUrl} onChange={(e) => setSourceUrl(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="pdfUrl" className="block text-gray-700 font-bold mb-2">발표 자료 PDF 경로</label>
          <input type="text" id="pdfUrl" value={pdfUrl} onChange={(e) => setPdfUrl(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">본문</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full px-3 py-2 border rounded-lg h-40" />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">저장</button>
      </form>
    </div>
  );
};

export default NewSeminarPage; 