function genNumArr(number) {
  const _g = (n = 1) => (n === 1 ? [1] : [n, ..._g(n - 1)]);
  const r = (arr = []) => arr.reverse();
  const g = (n = 1) => r(_g(n));
  return g(number);
}

describe('Maiden Test', () => {
  it('should generate array of 5 numbers', () => {
    const arrNum = genNumArr(5);
    expect(Array.isArray(arrNum)).toEqual(true);
    expect(arrNum).toEqual([1, 2, 3, 4, 5]);
  });
});
