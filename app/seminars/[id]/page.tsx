'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Seminar {
  title: string;
  date: string;
  content: string;
  image: string;
  sourceUrl?: string;
  pdfUrl?: string;
}

const SeminarDetailPage = () => {
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

  if (!seminar) {
    return <div className="pt-24 text-center">Loading...</div>;
  }

  return (
    <main className="pt-24 container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <Link href="/seminars" className="inline-block mb-8 text-gray-600 hover:text-gray-900">
          &larr; 목록으로 돌아가기
        </Link>
        <h1 className="text-4xl font-bold mb-2">{seminar.title}</h1>
        <p className="text-gray-500 mb-8">{seminar.date}</p>
        
        {seminar.image && (
          <div className="mb-8">
            <Image 
              src={seminar.image} 
              alt={seminar.title} 
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        <div className="prose lg:prose-xl max-w-none mb-8">
          <p className="whitespace-pre-wrap">{seminar.content}</p>
        </div>

        {seminar.pdfUrl && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-3">발표 자료</h2>
            <a href={seminar.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-500 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>PDF 다운로드</span>
            </a>
          </div>
        )}

        {seminar.sourceUrl && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-3">원본 출처</h2>
            <a 
              href={seminar.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
              style={{ wordBreak: 'break-all' }}
            >
              {seminar.sourceUrl}
            </a>
          </div>
        )}
      </div>
    </main>
  );
};

export default SeminarDetailPage; 