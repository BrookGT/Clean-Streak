class StorageService {
    constructor() {
        this.storageKey = "clean-streak-habits";
    }

    loadHabits() {
        if (typeof window === "undefined") {
            return [];
        }

        const rawHabits = window.localStorage.getItem(this.storageKey);
        if (!rawHabits) {
            return [];
        }

        try {
            return JSON.parse(rawHabits);
        } catch {
            return [];
        }
    }

    saveHabits(habits) {
        if (typeof window === "undefined") {
            return;
        }

        window.localStorage.setItem(this.storageKey, JSON.stringify(habits));
    }
}

const storageService = new StorageService();

module.exports = storageService;
