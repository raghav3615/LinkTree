import { NextResponse } from 'next/server';
import { getUser } from '@/lib/db';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const user = getUser(username);

  if (user && user.password === password) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}

