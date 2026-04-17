import type { CSSProperties } from "react";

type HabitComponentProps = {
    name: string;
    streak: number;
};

export function HabitComponent({ name, streak }: HabitComponentProps) {
    return (
        <li style={styles.item}>
            <span>{name}</span>
            <span style={styles.badge}>{streak} days</span>
        </li>
    );
}

const styles: Record<string, CSSProperties> = {
    item: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 12px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
    },
    badge: {
        backgroundColor: "#eef2ff",
        color: "#3730a3",
        padding: "4px 8px",
        borderRadius: "999px",
        fontSize: "0.85rem",
    },
};
