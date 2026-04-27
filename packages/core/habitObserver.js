const subscribers = new Set();

function subscribe(cb) {
    if (typeof cb !== "function") return;
    subscribers.add(cb);
}

function unsubscribe(cb) {
    subscribers.delete(cb);
}

function notify(data) {
    for (const cb of Array.from(subscribers)) {
        try {
            cb(data);
        } catch (e) {
            // swallow errors from subscribers to avoid breaking notify loop
            // in a real app you'd surface or log this
            // eslint-disable-next-line no-console
            console.error("habitObserver subscriber error", e);
        }
    }
}

module.exports = {
    subscribe,
    unsubscribe,
    notify,
};
