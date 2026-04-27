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
        try {
            // notify observers about the updated habits list
            // require here to avoid potential circular import issues at module load
            const habitObserver = require("./habitObserver");
            if (habitObserver && typeof habitObserver.notify === "function") {
                habitObserver.notify(habits);
            }
        } catch (e) {
            // fail silently - storage should not crash app
            // eslint-disable-next-line no-console
            console.error("Failed to notify habit observers", e);
        }
    }
}

const storageService = new StorageService();

module.exports = storageService;
