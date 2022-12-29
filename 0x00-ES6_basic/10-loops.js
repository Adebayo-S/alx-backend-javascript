// export default function appendToEachArrayValue(array, appendString) {
//   const newArray = [...array];
//   for (const [idx, value] of newArray.entries()) {
//     newArray[idx] = appendString + value;
//   }

//   return newArray;
// }

export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const element of array) {
    res.push(`${appendString}${element}`);
  }
  return res;
}
