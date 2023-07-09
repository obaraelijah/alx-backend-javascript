export default function cleanSet(set, startString) {
  const filteredArr = [...set].filter((value) => value.startsWith(startString));
  const finalArray = filteredArr.map((value) => value.slice(startString.length));
  return finalArray.join('-');
}
