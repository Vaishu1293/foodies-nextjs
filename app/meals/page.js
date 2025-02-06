import Link from 'next/link';

export default function Meals() {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Meals!!
        </h1>
        <p><Link href="/share">Meals Share</Link></p>
        <p><Link href="/meals-1">Meals-1</Link></p>
        <p><Link href="/meals-2">Meals-2</Link></p>
        <p><Link href="/meals-3">Meals-3</Link></p>
      </main>
    );
  }
  