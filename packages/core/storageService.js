const habitObserver = require("./habitObserver");

class StorageService {
    constructor() {
        this.storageKey = "clean-streak-habits";
    }

    loadHabits() {
        if (typeof window === "undefined") {
            return [];
        }

        const serializedHabits = window.localStorage.getItem(this.storageKey);
        if (!serializedHabits) {
            return [];
        }

        try {
            return JSON.parse(serializedHabits);
        } catch {
            return [];
        }
    }

    saveHabits(habits) {
        if (typeof window === "undefined") {
            return;
        }

        window.localStorage.setItem(this.storageKey, JSON.stringify(habits));

        // Observer flow: when storage is updated, notify listeners.
        habitObserver.notify(habits);

        // Simulation log: confirms persistence step happened.
        // eslint-disable-next-line no-console
        console.log("[StorageService] Habits saved", habits);
    }
}

// Singleton usage: this single instance is shared app-wide.
const storageService = new StorageService();

module.exports = storageService;
