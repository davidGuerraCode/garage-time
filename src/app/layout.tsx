import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Garage Time App',
  description: 'Schedule your garage time',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
