import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const seminarsFilePath = path.join(process.cwd(), 'data', 'seminars.json');

const getSeminars = () => {
  const seminarsData = fs.readFileSync(seminarsFilePath, 'utf8');
  return JSON.parse(seminarsData);
};

const saveSeminars = (seminars: any) => {
  fs.writeFileSync(seminarsFilePath, JSON.stringify(seminars, null, 2));
};

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const seminars = getSeminars();
  const seminar = seminars.find((s: any) => s.id === id);
  return NextResponse.json(seminar);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const [updatedSeminar, { id }] = await Promise.all([req.json(), params]);
  const seminars = getSeminars();
  const index = seminars.findIndex((s: any) => s.id === id);
  
  if (index !== -1) {
    seminars[index] = updatedSeminar;
    saveSeminars(seminars);
    return NextResponse.json({ message: 'Seminar updated successfully' });
  } else {
    return NextResponse.json({ message: 'Seminar not found' }, { status: 404 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const seminars = getSeminars();
  const filteredSeminars = seminars.filter((s: any) => s.id !== id);
  
  saveSeminars(filteredSeminars);

  return NextResponse.json({ message: 'Seminar deleted successfully' });
} 