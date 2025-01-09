import { NextResponse } from 'next/server';
import { addUser, getUser } from '@/lib/db';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  
  if (getUser(username)) {
    return NextResponse.json({ success: false, message: 'User already exists' }, { status: 400 });
  }

  addUser(username, password);
  return NextResponse.json({ success: true });
}

