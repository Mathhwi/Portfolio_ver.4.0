'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

const NewsPage = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <main className="pt-16">
      <section className="py-20 bg-white" id="news">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link href={`/news/${article.id}`} key={article.id} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-[250px] group">
                  <Image
                    src={article.image || '/project1.png'}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 h-14 overflow-hidden">{article.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{article.date}</p>
                  <p className="text-gray-600 mb-4 h-20 overflow-hidden">{article.summary}</p>
                   <span className="text-blue-500 hover:underline font-semibold">
                    자세히 보기 &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage; 