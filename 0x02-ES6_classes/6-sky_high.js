import Building from './5-building';

/**
 * Represent SkyHighBuilding class
 */
export default class SkyHighBuilding extends Building {
  /**
   * create a new SkyHighBuilding
   * @param {Number} sqft
   * @param {Number} floors
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Set floors of SkyHighBuilding
   */
  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = value;
  }

  /**
   * Get floors of SkyHighBuilding
   */
  get floors() {
    return this._floors;
  }

  /**
   * evacuationWarningMessage - override abstract methods
   * @returns {String}
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
