import Link from 'next/link';

export default function MealsPage() {
    return (
      <main>
        <h1>
          Meals Page
        </h1>
        <p><Link href="/meals/meals-1">Meals-1</Link></p>
        <p><Link href="/meals/meals-2">Meals-2</Link></p>
        <p><Link href="/meals/meals-3">Meals-3</Link></p>
      </main>
    );
  }
  