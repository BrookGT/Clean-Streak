type Habit = {
    id: string;
    name: string;
    streak: number;
};

declare const storageService: {
    loadHabits: () => Habit[];
    saveHabits: (habits: Habit[]) => void;
};

export = storageService;
