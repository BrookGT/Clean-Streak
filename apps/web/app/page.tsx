import { AddHabitComponent, HabitListComponent } from "@clean-streak/ui";

const habits = [
    { id: "1", name: "Workout", streak: 4 },
    { id: "2", name: "Study", streak: 7 },
    { id: "3", name: "Read", streak: 3 },
];

export default function HomePage() {
    return (
        <main className="page">
            <section className="card">
                <h1>Clean Streak - Habit Tracker</h1>
                <p className="subtitle">Phase 1: Component Structure</p>
                <AddHabitComponent />
                <HabitListComponent habits={habits} />
            </section>
        </main>
    );
}
