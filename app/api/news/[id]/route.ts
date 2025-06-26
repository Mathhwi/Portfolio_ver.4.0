import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const newsFilePath = path.join(process.cwd(), 'data', 'news.json');

const getNews = () => {
  const newsData = fs.readFileSync(newsFilePath, 'utf8');
  return JSON.parse(newsData);
};

const saveNews = (news: any) => {
  fs.writeFileSync(newsFilePath, JSON.stringify(news, null, 2));
};

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = getNews();
  const newsItem = news.find((item: any) => item.id === id);
  return NextResponse.json(newsItem);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const [updatedNews, { id }] = await Promise.all([req.json(), params]);
  const news = getNews();
  const index = news.findIndex((item: any) => item.id === id);
  
  if (index !== -1) {
    news[index] = updatedNews;
    saveNews(news);
    return NextResponse.json({ message: 'News updated successfully' });
  } else {
    return NextResponse.json({ message: 'News not found' }, { status: 404 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = getNews();
  const filteredNews = news.filter((item: any) => item.id !== id);
  
  saveNews(filteredNews);

  return NextResponse.json({ message: 'News deleted successfully' });
} 