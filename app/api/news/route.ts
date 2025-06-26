import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const newsFilePath = path.join(process.cwd(), 'data', 'news.json');

const getNews = () => {
  const newsData = fs.readFileSync(newsFilePath, 'utf8');
  return JSON.parse(newsData);
};

export async function GET() {
  const news = getNews();
  return NextResponse.json(news);
}

export async function POST(req: NextRequest) {
  const newArticle = await req.json();
  const news = getNews();
  
  news.push(newArticle);
  
  fs.writeFileSync(newsFilePath, JSON.stringify(news, null, 2));

  return NextResponse.json({ message: 'News article added successfully' });
} 