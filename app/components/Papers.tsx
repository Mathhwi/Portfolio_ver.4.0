'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Paper {
  title: string;
  description: string;
  authors: string[];
  image: string;
}

const Papers = () => {
  const [papers, setPapers] = useState<Paper[]>([]);

  useEffect(() => {
    fetch('/api/papers')
      .then(res => res.json())
      .then(data => setPapers(data));
  }, []);

  if (!papers.length) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-20 bg-white" id="papers">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Papers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {papers.map((paper, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-[400px] cursor-pointer group">
                <a href={paper.image} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={paper.image}
                    alt={paper.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{paper.title}</h3>
                <p className="text-gray-600 mb-4">{paper.description}</p>
                <div className="flex flex-wrap gap-2">
                  {paper.authors.map((author, authorIndex) => (
                    <span
                      key={authorIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {author}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Papers; 