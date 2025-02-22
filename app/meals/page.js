import { Suspense, lazy } from 'react';
import Link from 'next/link';
import classes from './page.module.css';

export const metadata = {
  title: 'All meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

export default function MealsPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favourite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share Your Favourite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetchimg meals...</p>}>
            <Meals/>
        </Suspense>
      </main>
    </>
  );
}

const Meals = lazy(() => import('@/app/meals/meals')); // Lazy-load Meals

