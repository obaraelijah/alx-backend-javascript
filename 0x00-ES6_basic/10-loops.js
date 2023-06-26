export default function appendToEachArrayValue(array, appendString) {
  const arrayTwo = [];
  for (const value of array) {
    arrayTwo.push(appendString + value);
  }

  return arrayTwo;
}
