/**
 * Represent HolbertonClass class
 */
export default class HolbertonClass {
  /**
   * create a new HolbertonClass
   * @param {Number} size
   * @param {String} location
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    }
    if (hint === 'number') {
      return this._size;
    }
    return this;
  }
}
