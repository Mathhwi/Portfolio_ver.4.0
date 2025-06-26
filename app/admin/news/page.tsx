'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NewsArticle {
  id: string;
  title: string;
  date: string;
}

const NewsAdminPage = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('정말로 이 뉴스를 삭제하시겠습니까?')) {
      await fetch(`/api/news/${id}`, {
        method: 'DELETE',
      });
      const res = await fetch('/api/news');
      const data = await res.json();
      setArticles(data);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">뉴스 관리</h1>
        <Link href="/admin/news/new" className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
          새 뉴스 추가
        </Link>
      </div>
      
      <div className="bg-white shadow-md rounded-lg">
        <ul className="divide-y divide-gray-200">
          {articles.map((article) => (
            <li key={article.id} className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-600">{article.date}</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/news/edit/${article.id}`} className="text-blue-500 hover:underline">
                  수정
                </Link>
                <button onClick={() => handleDelete(article.id)} className="text-red-500 hover:underline">삭제</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsAdminPage; 