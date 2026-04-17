import type { CSSProperties } from "react";
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
        <ul style={styles.list}>
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

const styles: Record<string, CSSProperties> = {
    list: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "grid",
        gap: "10px",
    },
};
