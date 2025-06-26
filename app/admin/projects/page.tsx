'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const ProjectsAdminPage = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const handleDelete = async (index: number) => {
    if (confirm('정말로 이 프로젝트를 삭제하시겠습니까?')) {
      await fetch(`/api/projects/${index}`, {
        method: 'DELETE',
      });
      // 삭제 후 목록을 다시 불러옵니다.
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">프로젝트 관리</h1>
        <Link href="/admin/projects/new" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          새 프로젝트 추가
        </Link>
      </div>
      
      <div className="bg-white shadow-md rounded-lg">
        <ul className="divide-y divide-gray-200">
          {projects.map((project, index) => (
            <li key={index} className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/projects/edit/${index}`} className="text-blue-500 hover:underline">
                  수정
                </Link>
                <button onClick={() => handleDelete(index)} className="text-red-500 hover:underline">삭제</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsAdminPage; 