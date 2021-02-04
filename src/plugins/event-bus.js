import Vue from 'vue'
// EventBus Object
const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $bus: {
    get() {
        return EventBus;
    },
    },
});

export { EventBus as default }