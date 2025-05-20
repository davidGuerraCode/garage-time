import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-2">
        <h1>Welcome to Garage Time App</h1>
        <p>Your one-stop solution for all your garage needs!</p>
        <Link
          href="/login"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Get Started
        </Link>
      </main>
    </>
  );
}
