'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  content: string;
  sourceUrl?: string;
}

const EditNewsPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [article, setArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/news/${id}`)
        .then(res => res.json())
        .then(data => setArticle(data));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!article) return;

    await fetch(`/api/news/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });

    router.push('/admin/news');
  };

  if (!article) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">뉴스 수정</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">제목</label>
          <input type="text" id="title" value={article.title} onChange={(e) => setArticle({...article, title: e.target.value})} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">날짜</label>
          <input type="date" id="date" value={article.date} onChange={(e) => setArticle({...article, date: e.target.value})} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">요약</label>
          <textarea id="summary" value={article.summary} onChange={(e) => setArticle({...article, summary: e.target.value})} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">대표 이미지 경로</label>
          <input type="text" id="image" value={article.image} onChange={(e) => setArticle({...article, image: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="sourceUrl" className="block text-gray-700 font-bold mb-2">원본 출처 URL (선택)</label>
          <input type="url" id="sourceUrl" value={article.sourceUrl || ''} onChange={(e) => setArticle({...article, sourceUrl: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">본문 (HTML 가능)</label>
          <textarea id="content" value={article.content} onChange={(e) => setArticle({...article, content: e.target.value})} className="w-full px-3 py-2 border rounded-lg h-60" />
          <p className="text-sm text-gray-500 mt-1">이미지를 넣으려면 &lt;img src="/경로/이미지.jpg"&gt; 와 같이 HTML 태그를 사용하세요.</p>
        </div>
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">수정 완료</button>
      </form>
    </div>
  );
};

export default EditNewsPage; 