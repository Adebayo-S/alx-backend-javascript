export default function createIteratorObject(report) {
  let report = [];
  for (let val of Object.values(report)) {
    for (let employee of Object.values(val)) {
      report.push(...employee);
    }
  }
  return report;
}
