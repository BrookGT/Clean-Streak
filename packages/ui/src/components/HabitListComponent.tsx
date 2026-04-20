import { HabitComponent } from "./HabitComponent";

type Habit = {
    id: string;
    name: string;
    streak: number;
};

type HabitListComponentProps = {
    habits: Habit[];
};

export function HabitListComponent({ habits }: HabitListComponentProps) {
    return (
        <ul className="cs-habit-list">
            {habits.map((habit) => (
                <HabitComponent
                    key={habit.id}
                    name={habit.name}
                    streak={habit.streak}
                />
            ))}
        </ul>
    );
}
