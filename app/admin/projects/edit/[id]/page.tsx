'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const EditProjectPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/projects/${id}`)
        .then(res => res.json())
        .then(data => setProject(data));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project) return;

    await fetch(`/api/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
    });

    router.push('/admin/projects');
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">프로젝트 수정</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">제목</label>
          <input type="text" id="title" value={project.title} onChange={(e) => setProject({...project, title: e.target.value})} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">설명</label>
          <textarea id="description" value={project.description} onChange={(e) => setProject({...project, description: e.target.value})} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="tech" className="block text-gray-700 font-bold mb-2">기술 스택 (쉼표로 구분)</label>
          <input type="text" id="tech" value={project.tech.join(',')} onChange={(e) => setProject({...project, tech: e.target.value.split(',')})} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">이미지 경로</label>
          <input type="text" id="image" value={project.image} onChange={(e) => setProject({...project, image: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">수정 완료</button>
      </form>
    </div>
  );
};

export default EditProjectPage; 