function validateHabit(name) {
    return typeof name === "string" && name.trim().length > 0;
}

function createHabit(name) {
    const trimmedName = String(name).trim();
    const id =
        typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
            ? crypto.randomUUID()
            : `habit-${Date.now()}-${Math.random().toString(16).slice(2)}`;

    return {
        id,
        name: trimmedName,
        streak: 0,
    };
}

module.exports = {
    createHabit,
    validateHabit,
};
