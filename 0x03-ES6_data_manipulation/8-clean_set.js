export default function cleanSet(set, startString) {
  let filteredArr;

  if (startString !== '') {
    filteredArr = Array.from(set).filter((str) => str.startsWith(startString));
    filteredArr = filteredArr.map((str) => str.slice(startString.length));
  } else {
    filteredArr = [];
  }
  return filteredArr.join('-');
}
