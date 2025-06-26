'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Seminar {
  id: string;
  title: string;
  date: string;
  summary: string;
}

const SeminarsAdminPage = () => {
  const [seminars, setSeminars] = useState<Seminar[]>([]);

  useEffect(() => {
    fetch('/api/seminars')
      .then(res => res.json())
      .then(data => setSeminars(data));
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('정말로 이 세미나를 삭제하시겠습니까?')) {
      await fetch(`/api/seminars/${id}`, {
        method: 'DELETE',
      });
      const res = await fetch('/api/seminars');
      const data = await res.json();
      setSeminars(data);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">세미나 관리</h1>
        <Link href="/admin/seminars/new" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
          새 세미나 추가
        </Link>
      </div>
      
      <div className="bg-white shadow-md rounded-lg">
        <ul className="divide-y divide-gray-200">
          {seminars.map((seminar) => (
            <li key={seminar.id} className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{seminar.title}</h2>
                <p className="text-gray-600">{seminar.date} - {seminar.summary}</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/seminars/edit/${seminar.id}`} className="text-blue-500 hover:underline">
                  수정
                </Link>
                <button onClick={() => handleDelete(seminar.id)} className="text-red-500 hover:underline">삭제</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeminarsAdminPage; 