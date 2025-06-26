import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const projectsFilePath = path.join(process.cwd(), 'data', 'projects.json');

const getProjects = () => {
  const projectsData = fs.readFileSync(projectsFilePath, 'utf8');
  return JSON.parse(projectsData);
};

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projects = getProjects();
  const project = projects[parseInt(id, 10)];
  return NextResponse.json(project);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const [updatedProject, { id }] = await Promise.all([req.json(), params]);
  const projects = getProjects();
  
  projects[parseInt(id, 10)] = updatedProject;
  
  fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));

  return NextResponse.json({ message: 'Project updated successfully' });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projects = getProjects();
  const projectIndex = parseInt(id, 10);

  projects.splice(projectIndex, 1);

  fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));

  return NextResponse.json({ message: 'Project deleted successfully' });
} 