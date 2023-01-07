interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

let studentA: Student = {
  firstName: "Bolaji",
  lastName: "Wike",
  age: 20,
  location: "Lagos"
}

let studentB: Student = {
  firstName: "Susan",
  lastName: "John",
  age: 26,
  location: "Warri"
}

const studentsList: Array<Student> = [studentA, studentB];

const body: HTMLBodyElement = document.querySelector('body');
const table: HTMLTableElement = document.createElement('table');
const row: HTMLTableRowElement = document.createElement('tr');

row.innerHTML = `<tr><th>Firstname</th><th>Location</th></tr>`;
table.appendChild(row);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
})

body.appendChild(table);
