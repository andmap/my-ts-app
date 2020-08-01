export const hasPairWithSum = (data: number[], sum: number) => {
  /*
   * [1, 2, 4, 4], 8 = true
   * [1, 2, 3, 9], 8 = false
   */

  let comp: number[] = [];
  for (let i = 0; i < data.length; i++) {
    const num = data[i];
    if (comp.includes(num)) {
      return true;
    } else comp.push(sum - num);
  }
  return false;
};
