function secondGrade(a, b, c) {
  if (a === undefined, b === undefined, c === undefined) return;
  let resolved = b * b - 4 * a * c;

  if (resolved < 0) console.log('No Solution');
  let x1 = (-b + Math.sqrt(resolved)) / (2 * a);
  let x2 = (-b - Math.sqrt(resolved)) / (2 * a);

  return { x1, x2 };
}

export default secondGrade;