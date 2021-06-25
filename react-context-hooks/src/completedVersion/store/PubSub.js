class PubSub {
    state = null;

    subscriptions = [];

    subscribe (subscription) {
        this.subscriptions.push(subscription);
    }

    publish () {
        this.subscriptions.forEach(subscription => subscription());
    }

    unSubscribe (subscription) {
        const index = this.subscriptions.indexOf(subscription);
        if (index > -1) {
            this.subscriptions.splice(index, 1);
        }
    }
}

export default PubSub;