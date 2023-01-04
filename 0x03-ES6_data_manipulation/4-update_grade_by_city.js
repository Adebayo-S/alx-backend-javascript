const updateStudentGradeByCity = (listOfStudents, city, newGrades) => (
  listOfStudents.filter((student) => student.location === city).map(
    (element) => {
      let flag = 0;
      const student = element;
      newGrades.forEach((grade) => {
        if (student.id === grade.studentId) {
          student.grade = grade.grade;
          flag = 1;
        }
      });

      if (!flag) {
        student.grade = 'N/A';
      }
      return student;
    },
  )
);

export default updateStudentGradeByCity;
