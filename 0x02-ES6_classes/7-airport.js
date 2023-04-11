/**
 * Represent Airport class
 */
export default class Airport {
  /**
   * create a new Airport
   * @param {String} name - Name of the airport
   * @param {String} code - Code of the airport
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
