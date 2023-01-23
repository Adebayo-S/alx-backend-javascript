# 0x03. ES6 data manipulation

## Resources

- [Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Install Jest, Babel, and ESLint in project directory

in your project directory:

- Install Jest using: `npm install --save-dev jest`
- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli`
- Install ESLint using: `npm install --save-dev eslint`

## Tasks

- **0. Basic list of objects**
  - [0-get_list_students.js](./0-get_list_students.js): function named getListStudents that returns an array of objects.
  &NewLine;
  Each object should have three attributes: id (Number), firstName (String), and location (String).
  &NewLine;
  The array contains the following students in order:
    - `Guillaume`, id: `1`, in `San Francisco`
    - `James`, id: `2`, in `Columbia`
    - `Serena`, id: `5`, in `San Francisco`

  ```bash
  bob@dylan:~$ cat 0-main.js
  import getListStudents from "./0-get_list_students.js";

  console.log(getListStudents());

  bob@dylan:~$
  bob@dylan:~$ npm run dev 0-main.js
  [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ]
  bob@dylan:~$
  ```

- **1. More mapping**
  - [1-get_list_student_ids.js](./1-get_list_student_ids.js): Create a function `getListStudentIds` that returns an array of ids from a list of object.
  &NewLine;
  This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.
  &NewLine;
  If the argument is not an array, the function is returning an empty array.
  &NewLine;
  You must use the map function on the array.

  ```bash
  bob@dylan:~$ cat 1-main.js
  import getListStudentIds from "./1-get_list_student_ids.js";
  import getListStudents from "./0-get_list_students.js";

  console.log(getListStudentIds("hello"));
  console.log(getListStudentIds(getListStudents()));

  bob@dylan:~$
  bob@dylan:~$ npm run dev 1-main.js
  []
  [ 1, 2, 5 ]
  bob@dylan:~$
  ```

- **2. Filter**
  - [2-get_students_by_loc.js](./2-get_students_by_loc.js): Create a function `getListStudentIds` that returns an array of objects who are located in a specific city.
  &NewLine;
  It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.
  &NewLine;
  You must use the `filter` function on the array.
  &NewLine;
  You must use the map function on the array.

  ```bash
  bob@dylan:~$ cat 2-main.js
  import getListStudents from "./0-get_list_students.js";
  import getStudentsByLocation from "./2-get_students_by_loc.js";

  const students = getListStudents();

  console.log(getStudentsByLocation(students, 'San Francisco'));

  bob@dylan:~$
  bob@dylan:~$ npm run dev 2-main.js
  [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ]
  bob@dylan:~$
  ```

- **3. Reduce**
  - [3-get_ids_sum.js](./3-get_ids_sum.js): Create a function `getStudentIdsSum` that the sum of all the student ids.
  &NewLine;
  It should accept a list of students (from `getListStudents`) as a parameter.
  &NewLine;
  You must use the `reduce` function on the array.
  &NewLine;

  ```bash
  bob@dylan:~$ cat 3-main.js
  import getListStudents from "./0-get_list_students.js";
  import getStudentIdsSum from "./3-get_ids_sum.js";

  const students = getListStudents();
  const value = getStudentIdsSum(students);

  console.log(value);

  bob@dylan:~$
  bob@dylan:~$ npm run dev 3-main.js
  8
  bob@dylan:~$
  ```

- **4. Combine**
  - [4-update_grade_by_city.js](./4-update_grade_by_city.js): Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.
  &NewLine;
  It should accept a list of students (from `getListStudents`), a `city` (String), and `newGrades` (Array of “grade” objects) as parameters.
  &NewLine;
  `newGrades` is an array of objects with this format:

  ```bash
  {
    studentId: 31,
    grade: 78,
  }
  ```

  If a student doesn’t have grade in `newGrades`, the final grade should be `N/A`.
  &NewLine;
  You must use `filter` and `map` combined.

  ```bash
  bob@dylan:~$ cat 4-main.js
  import getListStudents from "./0-get_list_students.js";
  import updateStudentGradeByCity from "./4-update_grade_by_city.js";

  console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

  console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

  bob@dylan:~$
  bob@dylan:~$ npm run dev 4-main.js
  [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
      grade: 86
    },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
  ]
  [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
      grade: 'N/A'
    },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
  ]
  bob@dylan:~$
  ```

- **5. Typed Arrays**
  - [5-typed_arrays.js](./5-typed_arrays.js): Create a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.
  &NewLine;
  It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).
  &NewLine;
  If adding the value is not possible the error `Position outside range` should be thrown.
  &NewLine;

  ```bash
  bob@dylan:~$ cat 5-main.js
  import createInt8TypedArray from "./5-typed_arrays.js";

  console.log(createInt8TypedArray(10, 2, 89));

  bob@dylan:~$
  bob@dylan:~$ npm run dev 5-main.js
  DataView {
    byteLength: 10,
    byteOffset: 0,
    buffer: ArrayBuffer {
      [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
      byteLength: 10
    }
  }
  bob@dylan:~$
  ```

- **6. Set data structure**
  - [6-set.js](./6-set.js): Create a function named `setFromArray` that returns a `Set` from an array.
  &NewLine;
  It accepts an argument (Array, of any kind of element).
  &NewLine;

  ```bash
  bob@dylan:~$ cat 6-main.js
  import setFromArray from "./6-set.js";

  console.log(setFromArray([12, 32, 15, 78, 98, 15]));

  bob@dylan:~$
  bob@dylan:~$ npm run dev 6-main.js
  Set { 12, 32, 15, 78, 98 }
  bob@dylan:~$
  ```

- **7. More set data structure**
  - [7-has_array_values.js](./7-has_array_values.js): Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.
  &NewLine;
  It accepts two arguments: a `set` (Set) and an `array` (Array)
  &NewLine;

  ```bash
  bob@dylan:~$ cat 7-main.js
  import hasValuesFromArray from "./7-has_array_values.js";

  console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
  console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
  console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

  bob@dylan:~$
  bob@dylan:~$ npm run dev 7-main.js
  true
  false
  false
  bob@dylan:~$
  ```

- **8. Clean set**
  - [8-clean_set.js](./8-clean_set.js): Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).
  &NewLine;
  It accepts two arguments: a `set` (Set) and a `startString` (String)
  &NewLine;
  When a value starts with startString you only append the rest of the string. The string contains all the values of the set separated by -
  &NewLine;

  ```bash
  bob@dylan:~$ cat 8-main.js
  import cleanSet from "./8-clean_set.js";

  console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
  console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

  bob@dylan:~$
  bob@dylan:~$ npm run dev 8-main.js
  jovi-aparte-appetit

  bob@dylan:~$
  ```

- **9. Map data structure**
  - [9-groceries_list.js](./9-groceries_list.js): Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):
  &NewLine;

  ```bash
  Apples, 10
  Tomatoes, 10
  Pasta, 1
  Rice, 1
  Banana, 5
  ```

  &NewLine;
  Result:
  &NewLine;
  When a value starts with startString you only append the rest of the string. The string contains all the values of the set separated by -
  &NewLine;

  ```bash
  bob@dylan:~$ cat 8-main.js
  import cleanSet from "./8-clean_set.js";

  console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
  console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

  bob@dylan:~$
  bob@dylan:~$ npm run dev 8-main.js
  jovi-aparte-appetit

  bob@dylan:~$
  ```

- **10. More map data structure**
  - [10-update_uniq_items.js](./10-update_uniq_items.js): Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.:
  &NewLine;
  It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.
  &NewLine;
  For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown.
  &NewLine;

  ```bash
  bob@dylan:~$ cat 10-main.js
  import updateUniqueItems from "./10-update_uniq_items.js";
  import groceriesList from "./9-groceries_list.js";

  const map = groceriesList();
  console.log(map);

  updateUniqueItems(map)
  console.log(map);

  bob@dylan:~$
  bob@dylan:~$ npm run dev 10-main.js
  Map {
    'Apples' => 10,
    'Tomatoes' => 10,
    'Pasta' => 1,
    'Rice' => 1,
    'Banana' => 5
  }
  Map {
    'Apples' => 10,
    'Tomatoes' => 10,
    'Pasta' => 100,
    'Rice' => 100,
    'Banana' => 5
  }
  bob@dylan:~$
  ```

- **11. Weak link data structure**
  - [100-weak.js](./100-weak.js): Export a `const` instance of `WeakMap` and name it `weakMap`.
  &NewLine;
  Export a new function named `queryAPI`. It should accept an endpoint argument like so:
  &NewLine;

  ```bash
  {
    protocol: 'http',
    name: 'getUsers',
  }
  ```

  &NewLine;
  Track within the `weakMap` the number of times `queryAPI` is called for each endpoint.
  &NewLine;
  When the number of queries is >= 5 throw an error with the message `Endpoint load is high.`

  ```bash
  bob@dylan:~$ cat 100-main.js
  import { queryAPI, weakMap } from "./100-weak.js";

  const endpoint = { protocol: 'http', name: 'getUsers' };
  weakMap.get(endpoint);

  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));

  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));

  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);

  bob@dylan:~$
  bob@dylan:~$ npm run dev 100-main.js
  1
  2
  .../100-weak.js:16
      throw new Error('Endpoint load is high');
    ...
  bob@dylan:~$
  ```
