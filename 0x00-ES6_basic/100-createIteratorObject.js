export default function createIteratorObject(report) {
  let report = [];
  for (let val of Object.values(report.allEmployees)) {
    report = [...report, ...val];
  }
  return report;
}
