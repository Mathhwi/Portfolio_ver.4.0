'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface NewsArticle {
  title: string;
  date: string;
  content: string;
  sourceUrl?: string;
}

const NewsDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const [article, setArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/news/${id}`)
        .then((res) => res.json())
        .then((data) => setArticle(data));
    }
  }, [id]);

  if (!article) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">{article.title}</h1>
          <p className="text-gray-500 text-lg">{new Date(article.date).toLocaleDateString()}</p>
        </header>
        
        <div 
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />

        {article.sourceUrl && (
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-2">원본 출처</h3>
            <Link href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
              {article.sourceUrl}
            </Link>
          </div>
        )}
      </article>
      <div className="mt-12 text-center">
        <Link href="/news" className="text-blue-600 hover:underline">
          &larr; 모든 뉴스로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailPage; 