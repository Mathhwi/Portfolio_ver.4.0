'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const NewNewsPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: Date.now().toString(), title, date, summary, image, content, sourceUrl }),
    });

    router.push('/admin/news');
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">새 뉴스 추가</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">제목</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">날짜</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">요약</label>
          <textarea id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">대표 이미지 경로</label>
          <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="sourceUrl" className="block text-gray-700 font-bold mb-2">원본 출처 URL (선택)</label>
          <input type="url" id="sourceUrl" value={sourceUrl} onChange={(e) => setSourceUrl(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">본문 (HTML 가능)</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full px-3 py-2 border rounded-lg h-60" />
          <p className="text-sm text-gray-500 mt-1">이미지를 넣으려면 &lt;img src="/경로/이미지.jpg"&gt; 와 같이 HTML 태그를 사용하세요.</p>
        </div>
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">저장</button>
      </form>
    </div>
  );
};

export default NewNewsPage; 