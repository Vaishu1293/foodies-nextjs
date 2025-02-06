export default function MealsDetails({ params }) {
    return (
        <main>
            <h1>Meals Details Page</h1>
            <p>{params.slug}</p>
        </main>
    );
}