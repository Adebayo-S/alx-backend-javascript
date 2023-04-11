import Currency from './3-currency';

/**
 * Represents pricing class
 */
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Set amount of pricing
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  /**
   * Get amount of pricing
   */
  get amount() {
    return this._amount;
  }

  /**
   * Set currency of pricing
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency object');
    }
    this._currency = currency;
  }

  /**
   * Get currency of the pricing
   */
  get currency() {
    return this._currency;
  }

  /**
   * displayFullPrice - display full price
   * @returns {String}
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * convertPrice - convert price
   * @param {Number} amount - amount of price
   * @param {Number} conversionRate - conversion rate
   * @returns
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
