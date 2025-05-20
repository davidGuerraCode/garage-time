'use client';

import { Button } from '@/components/ui/button';

export default function ErrorPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1>Oops, sorry</h1>
      <p className="my-2">Something went wrong. Please try again later.</p>
      <Button onClick={() => window.location.reload()}>Retry</Button>
    </main>
  );
}
