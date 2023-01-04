const getStudentsByLocation = (listOfStudents, city) => (
  listOfStudents.filter((student) => (student.location === city))
);

export default getStudentsByLocation;
