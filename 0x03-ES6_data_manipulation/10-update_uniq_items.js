export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((k, v) => {
    if (v === 1) {
      map.set(k, 100);
    }
  });
}
