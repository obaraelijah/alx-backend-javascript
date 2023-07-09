export default function getStudentIdsSum(arr) {
  return arr.reduce((sum, obj) => sum + obj.id, 0);
}
