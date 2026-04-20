type HabitComponentProps = {
    name: string;
    streak: number;
};

export function HabitComponent({ name, streak }: HabitComponentProps) {
    return (
        <li className="cs-habit-item">
            <span className="cs-habit-item__name">{name}</span>
            <span className="cs-habit-item__badge">{streak} days</span>
        </li>
    );
}
