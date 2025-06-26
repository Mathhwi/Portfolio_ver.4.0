import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const projectsFilePath = path.join(process.cwd(), 'data', 'projects.json');

export async function GET() {
  const projectsData = fs.readFileSync(projectsFilePath, 'utf8');
  const projects = JSON.parse(projectsData);
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  const newData = await req.json();
  
  const projectsData = fs.readFileSync(projectsFilePath, 'utf8');
  const projects = JSON.parse(projectsData);
  
  projects.push(newData);
  
  fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));

  return NextResponse.json({ message: 'Project added successfully' });
} 