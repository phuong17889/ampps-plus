import Storage from '@util/storage';

export default class App {
  constructor() {
    this.util = Object.create(null);
    this.util.storage = new Storage(this);
  }
}
