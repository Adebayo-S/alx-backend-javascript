export default function createIteratorObject(report) {
  let result = [];
  for (let val of Object.values(report.allEmployees)) {
    result = [...report, ...val];
  }
  return result;
}
