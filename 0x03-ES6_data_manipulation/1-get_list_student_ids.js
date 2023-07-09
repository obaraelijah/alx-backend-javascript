export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((li) => li.id);
  }
  return [];
}
