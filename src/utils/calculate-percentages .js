export function calculatePercentage(part, total) {
  if (total === 0) {
    return 0; // Tránh chia cho 0
  }
  const percentage = (part / total) * 100;
  return parseFloat(percentage.toFixed(2));
}
