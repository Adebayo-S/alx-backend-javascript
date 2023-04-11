/**
 * Represent Currency class
 */
export default class Currency {
  /**
   * Create a new currency
   *
   * @param {String} code
   * @param {String} name
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Set code of the currency
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  /**
   * Get code of the currency
   */
  get code() {
    return this._code;
  }

  /**
   * Set name of the currency
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Get name of the currency
   */
  get name() {
    return this._name;
  }

  /**
   * displayFullCurrency - display full currency
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
