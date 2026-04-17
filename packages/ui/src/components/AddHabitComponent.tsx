import type { CSSProperties } from "react";

export function AddHabitComponent() {
    return (
        <div style={styles.wrapper}>
            <input
                type="text"
                placeholder="Add a habit..."
                style={styles.input}
            />
            <button type="button" style={styles.button}>
                Add
            </button>
        </div>
    );
}

const styles: Record<string, CSSProperties> = {
    wrapper: {
        display: "flex",
        gap: "8px",
        marginBottom: "16px",
    },
    input: {
        flex: 1,
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "10px 12px",
    },
    button: {
        border: "none",
        borderRadius: "8px",
        padding: "10px 14px",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        cursor: "pointer",
    },
};
