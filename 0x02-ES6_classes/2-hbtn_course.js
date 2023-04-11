/**
 * Represent HolbertonCourse class
 */
export default class HolbertonCourse {
  /**
   * Create a new course
   *
   * @param {String} name - Name of the course
   * @param {Number} length - Duration of the course (year)
   * @param {String[]} students - List of students offering the course
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Set name of the course
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Get name of the course
   */
  get name() {
    return this._name;
  }

  /**
   * Set duration of the course
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Lenght must be a number');
    }
    this._length = length;
  }

  /**
   * Get duration of the course
   */
  get length() {
    return this._length;
  }

  /**
   * Set list of students offering the course
   */
  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array of string');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of string');
    }
    this._students = students;
  }

  /**
   * Get list of students offering the course
   */
  get students() {
    return this._students;
  }
}
