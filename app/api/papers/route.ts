import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const papersFilePath = path.join(process.cwd(), 'data', 'papers.json');

const getPapers = () => {
  const papersData = fs.readFileSync(papersFilePath, 'utf8');
  return JSON.parse(papersData);
};

export async function GET() {
  const papers = getPapers();
  return NextResponse.json(papers);
}

export async function POST(req: NextRequest) {
  const newPaper = await req.json();
  const papers = getPapers();
  
  papers.push(newPaper);
  
  fs.writeFileSync(papersFilePath, JSON.stringify(papers, null, 2));

  return NextResponse.json({ message: 'Paper added successfully' });
} 