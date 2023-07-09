export default function getStudentsByLocation(arr, city) {
  return arr.filter((obj) => obj.location === city);
}
