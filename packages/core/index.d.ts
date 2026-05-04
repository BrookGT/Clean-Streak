type Habit = {
    id: string;
    name: string;
    streak: number;
};

declare const storageService: {
    loadHabits: () => Habit[];
    saveHabits: (habits: Habit[]) => void;
    habitObserver?: {
        subscribe: (cb: (data: Habit[]) => void) => void;
        unsubscribe: (cb: (data: Habit[]) => void) => void;
        notify: (data: Habit[]) => void;
    };
    habitUtils?: {
        validateHabit: (name: string) => boolean;
        createHabit: (name: string) => Habit;
    };
};

export = storageService;
