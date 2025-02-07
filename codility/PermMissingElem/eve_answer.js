// 50% (틀린 답)
function solution(A) {
  const sorted = A.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] - sorted[i] !== 1) return sorted[i] + 1;
  }
}

// 100%
function solution(A) {
  const sorted = A.sort((a, b) => a - b);
  if (sorted[0] !== 1) return 1;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] - sorted[i] !== 1) return sorted[i] + 1;
  }
  return sorted[sorted.length - 1] + 1;
}
