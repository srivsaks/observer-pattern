class Observer {
  constructor() {
    this.observers = [];
  }
  subscribe(cb) {
    this.observers.push(cb);
  }
  notify(data) {
    this.observers.forEach((cb) => cb(data));
  }
  unsubscribe(cb) {
    this.observers = this.observers.filter((fn) => fn !== cb);
  }
}

const observer = new Observer();
export default observer;
