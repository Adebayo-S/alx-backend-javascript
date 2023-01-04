const getStudentIdsSum = (listOfStudents) => (
  listOfStudents.reduce((accumulator, student) => accumulator + student.id, 0)
);

export default getStudentIdsSum;
