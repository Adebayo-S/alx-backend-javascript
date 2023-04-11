/**
 * Represent Building class
 */
export default class Building {
  /**
   * Create a new building
   * @param {Number} sqft
   */
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  /**
   * Set sqft of the building
   */
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  /**
   * Get sqft of the building
   */
  get sqft() {
    return this._sqft;
  }
}
