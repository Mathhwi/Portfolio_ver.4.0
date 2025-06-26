'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Seminar {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

const SeminarsPage = () => {
  const [seminars, setSeminars] = useState<Seminar[]>([]);

  useEffect(() => {
    fetch('/api/seminars')
      .then(res => res.json())
      .then(data => setSeminars(data));
  }, []);

  return (
    <main className="pt-16">
      <section className="py-20 bg-white" id="seminars">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Seminars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seminars.map((seminar) => (
              <Link href={`/seminars/${seminar.id}`} key={seminar.id} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-[400px] group">
                  <Image
                    src={seminar.image || '/project1.png'}
                    alt={seminar.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{seminar.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{seminar.date}</p>
                  <p className="text-gray-600 mb-4 h-24 overflow-hidden">{seminar.summary}</p>
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

export default SeminarsPage; 