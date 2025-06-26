import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const papersFilePath = path.join(process.cwd(), 'data', 'papers.json');

const getPapers = () => {
  const papersData = fs.readFileSync(papersFilePath, 'utf8');
  return JSON.parse(papersData);
};

const savePapers = (papers: any) => {
  fs.writeFileSync(papersFilePath, JSON.stringify(papers, null, 2));
};

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const papers = getPapers();
  const paper = papers[parseInt(id, 10)];
  return NextResponse.json(paper);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const [updatedPaper, { id }] = await Promise.all([req.json(), params]);
  const papers = getPapers();
  
  papers[parseInt(id, 10)] = updatedPaper;
  
  savePapers(papers);

  return NextResponse.json({ message: 'Paper updated successfully' });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const papers = getPapers();
  const paperIndex = parseInt(id, 10);

  papers.splice(paperIndex, 1);

  savePapers(papers);

  return NextResponse.json({ message: 'Paper deleted successfully' });
} 