export function filterRole(champions, role) {
  return champions.filter(champion => champion.tags.includes(role));
}

export function calculatePercent(champions, allChampions) {
  const percentage = champions.length / allChampions.length * 100;
  return percentage.toFixed(2);
}
