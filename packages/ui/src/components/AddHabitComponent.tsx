import { useState } from "react";

type AddHabitComponentProps = {
    onAddHabit: (habitName: string) => void;
};

export function AddHabitComponent({ onAddHabit }: AddHabitComponentProps) {
    const [habitName, setHabitName] = useState("");

    const handleAddHabit = () => {
        const trimmedName = habitName.trim();
        if (!trimmedName) {
            return;
        }

        onAddHabit(trimmedName);
        setHabitName("");
    };

    return (
        <div className="cs-add-habit">
            <input
                type="text"
                placeholder="Add a habit..."
                className="cs-add-habit__input"
                value={habitName}
                onChange={(event) => setHabitName(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        handleAddHabit();
                    }
                }}
            />
            <button
                type="button"
                className="cs-add-habit__button"
                onClick={handleAddHabit}
            >
                Add
            </button>
        </div>
    );
}
