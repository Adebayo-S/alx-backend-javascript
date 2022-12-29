export default function appendToEachArrayValue(array, appendString) {
  const newArray = array;
  for (let [idx, value] of array.entries()) {
    newArray[idx] = appendString + value;
  }

  return array;
}
