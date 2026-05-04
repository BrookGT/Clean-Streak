"use client";

import { useEffect, useState } from "react";
import { AddHabitComponent, HabitListComponent } from "@clean-streak/ui";
import storageService from "@clean-streak/core";

type Habit = {
    id: string;
    name: string;
    streak: number;
};

const initialHabits: Habit[] = [
    { id: "1", name: "Workout", streak: 5 },
    { id: "2", name: "Study", streak: 7 },
    { id: "3", name: "Read", streak: 3 },
];

export default function HomePage() {
    const [habits, setHabits] = useState<Habit[]>(initialHabits);

    const observer = storageService.habitObserver;
    const habitUtils = storageService.habitUtils;

    useEffect(() => {
        const storedHabits = storageService.loadHabits();
        if (storedHabits.length > 0) {
            setHabits(storedHabits);
        }

        // Observer flow: app subscribes once and reacts to updates.
        if (observer && typeof observer.subscribe === "function") {
            const onHabitsChanged = (data: Habit[]) => {
                // Simulation log: proves observer receives updates.
                // eslint-disable-next-line no-console
                console.log("habitObserver: habits updated", data);
            };

            observer.subscribe(onHabitsChanged);
            return () => observer.unsubscribe(onHabitsChanged);
        }
    }, []);

    const handleAddHabit = (habitName: string) => {
        const isValidHabitName = habitUtils
            ? habitUtils.validateHabit(habitName)
            : habitName.trim().length > 0;

        if (!isValidHabitName) {
            return;
        }

        const newHabit: Habit = habitUtils
            ? habitUtils.createHabit(habitName)
            : {
                  id: crypto.randomUUID(),
                  name: habitName.trim(),
                  streak: 0,
              };

        const updatedHabits = [...habits, newHabit];
        setHabits(updatedHabits);

        // Data flow: app state update -> storage save -> observer notify.
        storageService.saveHabits(updatedHabits);

        // Simulation log: confirms add flow at app layer.
        // eslint-disable-next-line no-console
        console.log("[App] Habit added", newHabit);
    };

    const totalHabits = habits.length;
    const topStreak = habits.reduce(
        (highestStreak, habit) => Math.max(highestStreak, habit.streak),
        0,
    );

    return (
        <main className="page">
            <section className="card">
                <header className="hero">
                    <p className="hero__eyebrow">Clean Streak</p>
                    <h1>Build tiny habits. Keep the streak alive.</h1>
                    <p className="subtitle">
                        Add habits and keep your momentum going every day.
                    </p>
                </header>

                <section className="stats" aria-label="Habit statistics">
                    <article className="stats__item">
                        <p className="stats__label">Active Habits</p>
                        <p className="stats__value">{totalHabits}</p>
                    </article>
                    <article className="stats__item">
                        <p className="stats__label">Top Streak</p>
                        <p className="stats__value">{topStreak} days</p>
                    </article>
                </section>

                <AddHabitComponent onAddHabit={handleAddHabit} />
                <HabitListComponent habits={habits} />
            </section>
        </main>
    );
}
