import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { date } = request.json();

  if (!date)
    return NextResponse.json({ error: 'Missing date' }, { status: 400 });
}
