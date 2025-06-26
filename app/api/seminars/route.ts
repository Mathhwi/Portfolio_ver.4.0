import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const seminarsFilePath = path.join(process.cwd(), 'data', 'seminars.json');

const getSeminars = () => {
  const seminarsData = fs.readFileSync(seminarsFilePath, 'utf8');
  return JSON.parse(seminarsData);
};

export async function GET() {
  const seminars = getSeminars();
  return NextResponse.json(seminars);
}

export async function POST(req: NextRequest) {
  const newSeminar = await req.json();
  const seminars = getSeminars();
  
  seminars.push(newSeminar);
  
  fs.writeFileSync(seminarsFilePath, JSON.stringify(seminars, null, 2));

  return NextResponse.json({ message: 'Seminar added successfully' });
} 