import { NextResponse } from 'next/server';
import { updateUserLinks } from '@/lib/db';

export async function POST(request: Request) {
  const { links } = await request.json();
  // In a real app, you'd get the username from the session
  const username = 'testuser';

  updateUserLinks(username, links);
  return NextResponse.json({ success: true });
}

