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

export const hasPairWithSumUseMap = (data: number[], sum: number) => {
  /*
   * [1, 2, 4, 4], 8 = true
   * [1, 2, 3, 9], 8 = false
   */

  let comp = new Map();
  for (let i = 0; i < data.length; i++) {
    const num = data[i];
    if (comp.has(num)) {
      return true;
    } else {
      comp.set(sum - num, num);
    }
  }
  return false;
};

export const fibonacciBottomUp = (n: number) => {
  /*
   * [1, 1, 2, 3, 5, 8]
   * fibonacciBottomUp(6) = 8
   */

  let bottomUp: number[] = [];
  if (n <= 2) return 1;
  else {
    bottomUp.push(1);
    bottomUp.push(1);
    for (let i = 3; i <= n; i++) {
      bottomUp[i - 1] = bottomUp[i - 2] + bottomUp[i - 3];
    }
    return bottomUp[n - 1];
  }
};

export const reconciliation = (data1: number[], data2: number[]) => {
  /*
   * data1 = [5.1, 1, 1.1, 2.3, 3.0, 5.2, 5.1, 3.0]
   * data2 = [1.1, 3.0, 5.1, 3.1, 5.1, 8.1]
   * reconciliation = [1.1, 3.0, 5.1]
   */

  let comp = new Map();
  let result = [];
  for (let i = 0; i < data1.length; i++) {
    const num = data1[i];
    if (!comp.has(num)) {
      comp.set(num, 1);
    } else {
      comp.set(num, comp.get(num) + 1);
    }
  }

  for (let i = 0; i < data2.length; i++) {
    const num = data2[i];
    if (comp.has(num)) {
      result.push(num);
      const count = comp.get(num) - 1;
      if (count === 0) comp.delete(num);
      else comp.set(num, count);
    }
  }
  return result;
};

function manipulatePropertiesOfObject(
  obj: any,
  operation: string,
  prop: string,
  newValue: number | null
) {
  switch (operation) {
    case "delete":
      const deleted = { ...obj };

      for (const property in obj) {
        if (property === prop) delete deleted[property];
      }

      return deleted;
      break;
    case "edit":
      const edited = { ...obj };

      for (const property in obj) {
        if (property === prop) edited[property] = newValue;
      }

      return edited;
      break;
    default:
      break;
  }
}

interface InventoryList {
  getList: () => string[];
  remove: (name: any) => void;
  add: (name: any) => number;
  list: string[];
}
function inventoryList() {
  let object = new Object() as InventoryList;
  object.list = [];
  object.add = (name: string) => object.list.push(name);
  object.remove = (name: string) => {
    const copy = object.list.filter((item) => item !== name);
    object.list = copy;
  };
  object.getList = () => object.list;

  return object;
}

const obj = inventoryList();
console.log(obj.add("Testing"));

const mergeSort = (unsortedArray: number[]) => {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);
  const result = merge(mergeSort(left), mergeSort(right));
  return result;
};

const merge = (left: number[], right: number[]): number[] => {
  let resultArray: number[] = [],
    leftIndex = 0,
    rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

/*
  const arr= [2, 7, 7, 10, 1, 2, 4, 3]
  console.log('sorted', quickSort(arr))
  console.log('origal',arr)  
*/

const quickSort = (arr: number[]): number[] => {
  /*
  devided in 2 groups by pivot: < and >=

  */
  if (arr.length <= 1) {
    return arr;
  }
  // use value of last item of arr as pivot
  const idxOfPivot = arr.length - 1;
  const pivot = arr[idxOfPivot];
  const leftArr = [];
  const rightArr = [];

  for (const el of arr.slice(0, idxOfPivot)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

/*
  towerOfHanoi(4, 'A', 'C', 'B');  
*/
const towerOfHanoi = (
  n: number,
  from_rod: string,
  to_rod: string,
  aux_rod: string
) => {
  if (n == 1) {
    console.log(`Move disk 1 from ${from_rod} to ${to_rod}`);
    return;
  }
  towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
  console.log(`Move disk ${n} from ${from_rod} to ${to_rod}`);
  towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
};

const isBalancedBrackets = (input: string) => {
  /*
    {[()]}  - true
    {[(])}  - false
    {{[[(())]]}} - true
    const isBalanced = isBalancedBrackets("{[}((({]")
    console.log(isBalanced);

  */
  let arr: string[] = [];
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    switch (element) {
      case "{":
      case "[":
      case "(":
        arr.push(element);
        break;
      case "}":
        if (arr.length == 0 || arr[arr.length - 1] !== "{") return false;
        else arr.pop();
        break;
      case "]":
        if (arr.length == 0 || arr[arr.length - 1] !== "[") return false;
        else arr.pop();
        break;
      case ")":
        if (arr.length == 0 || arr[arr.length - 1] !== "(") return false;
        else arr.pop();
        break;
      default:
        break;
    }
    console.log(index);
  }
  if (arr.length !== 0) return false;
  else return true;
};

let arr: string[] = [];
const processQueue = (input: string) => {
  /*

  */
  const inputInArr = input.split("\n");
  for (let i = 1; i < inputInArr.length; i++) {
    const lineInArr = inputInArr[i].split(" ");
    if (lineInArr[0] === "1") arr.push(lineInArr[1]);
    else if (lineInArr[0] === "2") arr.shift();
    else if (lineInArr[0] === "3" && arr.length > 0) console.log(arr[0]);
  }
};

function largestRectangle(h: number[]) {
  /*
const result = largestRectangle([8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116])
console.log(result)

const result2 = largestRectangle([11, 11, 10, 10, 10])
console.log(result2)

  */
  let result = 0;
  for (let i = 0; i < h.length; i++) {
    let countOfSameOrHigher = 0;
    let j = i + 1;
    while (j > i && j < h.length) {
      if (h[j] < h[i]) break;
      j += 1;
    }
    countOfSameOrHigher = j - i;
    j = i - 1;
    while (j < i && j >= 0) {
      if (h[j] < h[i]) break;
      j -= 1;
    }
    countOfSameOrHigher += i - j - 1;
    const c = h[i] * countOfSameOrHigher;
    result = Math.max(result, c);
  }
  return result;
}

const simpleTextEditor = (input: string) => {
  /*
  operations:

  1. append - Append string  to the end of .
  2. delete - Delete the last  characters of .
  3. print - Print the  character of .
  4. undo - Undo the last (not previously undone) operation of type  or , reverting  to the state it was in prior to that operation.

  input: 

  8
  1 abc
  3 3
  2 3
  1 xy
  3 2
  4
  4
  3 1

  output:
  c
  y
  a
  */
  const arr = input.split("\n");
  const count = parseInt(arr[0]);
  let text = "";
  let result = [];
  for (let i = 1; i < count; i++) {
    const line = arr[i].split(" ");
    switch (line[0]) {
      case "1":
        result.push(text);
        text = text.concat(line[1]);

        break;
      case "2":
        result.push(text);
        text = text.substr(0, text.length - parseInt(line[1]));

        break;
      case "3":
        console.log(text.substr(parseInt(line[1]) - 1, 1));
        break;
      case "4":
        text = result.length > 0 ? result[result.length - 1] : "";
        result.pop();
        console.log(result);
        break;

      default:
        break;
    }
  }
};

const poisonousPlants2 = (input: number[]): number => {
  let timesOfProcess = 0;
  let removed = false;
  for (let i = input.length - 1; i > 0; i--) {
    if (input[i] > input[i - 1]) {
      input.splice(i, 1);
      removed = true;
    }
  }

  if (removed) {
    timesOfProcess += 1;
    return (timesOfProcess += poisonousPlants2(input));
  }
  return timesOfProcess;
};

const poisonousPlants1 = (input: number[]) => {
  let stacks = [];
  let start = 0;
  while (start < input.length - 1) {
    if (input[start + 1] > input[start]) {
      const stack = input.slice(0, start + 1);
      stacks.push(stack);
      input = input.slice(start + 1);
      start = 0;
    } else start += 1;
  }
  stacks.push(input);
  if (stacks.length === 1) return 0;
  else return popAndMerge(stacks);
};

const popAndMerge = (stacks: any): number => {
  let result = [];
  result.push(stacks[0]);
  for (let i = 1; i < stacks.length; i++) {
    const stack = stacks[i];
    // pop
    stack.shift();
    if (stack.length > 0) {
      const last: number[] = result[result.length - 1];
      if (stack[0] <= last[last.length - 1]) {
        result[result.length - 1] = last.concat(stack);
      } else result.push(stack);
    }
    console.log(result);
  }

  if (result.length > 1) {
    return popAndMerge(result) + 1;
  } else {
    return 1;
  }
};

const poisonousPlants = (input: number[]) => {
  /*
  
  console.log(poisonousPlants([20, 5, 6, 15, 2, 2, 17, 2, 11, 5, 14, 5, 10, 9, 19, 12, 5]))  //4
  
  console.log(poisonousPlants([4, 3, 7, 5, 6, 4, 2]))  //3
  
  console.log(poisonousPlants([4, 5, 3, 2, 1, 6])) //1

  console.log(poisonousPlants([3, 7, 1, 2, 4, 8, 2, 7, 10])) //2

  console.log(poisonousPlants([1, 2, 3, 4, 5])) //1

 console.log(poisonousPlants([1, 1, 1])) // 0
  
console.log(poisonousPlants([6, 5, 8, 4, 7, 10, 9])) //2


  */
  let all = [];
  let group = [input[0]];
  let i = 1;
  let maxDay = -1;
  let days = 0;
  while (i < input.length) {
    if (input[i] > input[i - 1]) {
      if (group.length > 0) {
        all.push([...group]);
        group = [];
      }
      group.push(input[i]);
    } else {
      group.push(input[i]);
    }
    i += 1;
  }
  if (group.length > 0) {
    if (all.length === 1) {
      const first = all[0];
      if (group[group.length - 1] > first[0])
        maxDay = Math.max(maxDay, group.length);
      else all.push(group);
    } else all.push(group);
  }

  days = Math.max(days, maxDay);
  console.log(all, days);

  while (all.length > 1) {
    days += 1;
    let newAll: any[] = [all[0]];
    for (let j = 1; j < all.length; j++) {
      let current = all[j];
      console.log(current);
      current.shift();
      if (current.length === 0)
        //all.splice(j,1)
        console.log("remove");
      else {
        let pre = newAll[newAll.length - 1];

        if (pre[pre.length - 1] >= current[0]) {
          newAll[newAll.length - 1] = [...pre, ...current];
        } else {
          newAll.push([...current]);
        }
      }
    }
    all = newAll;
    console.log(all);
  }
  return days;
};

const stockSpanProblem = (input: number[]) => {
  /*
  https://algorithmsandme.com/stacks-stock-span-problem/
  const result = stockSpanProblem([100, 60, 70, 65, 80, 85, 200])
  console.log(result) // [ 1, 1, 2, 1, 4, 5, 7 ] 
  */
  let stack: number[] = [];
  let span: number[] = [];

  stack.push(0);
  span.push(1);

  for (let i = 1; i < input.length; i++) {
    while (input[stack[stack.length - 1]] < input[i] && stack.length > 0) {
      stack.pop();
    }
    if (stack.length == 0) span.push(i + 1);
    else if (input[stack[stack.length - 1]] > input[i]) {
      span.push(i - stack[stack.length - 1]);
    }
    stack.push(i);
  }
  return span;
};

const killerOfPlants = (p: number[]) => {
  /*
  console.log(killerOfPlants([20, 5, 6, 15, 2, 2, 17, 2, 11, 5, 14, 5, 10, 9, 19, 12, 5]))  //4
  console.log(killerOfPlants([4, 3, 7, 5, 6, 4, 2]))  //3
  console.log(killerOfPlants([4, 5, 3, 2, 1, 6])) //1
  console.log(killerOfPlants([3, 7, 1, 2, 4, 8, 2, 7, 10])) //2
  console.log(killerOfPlants([1, 2, 3, 4, 5])) //1
  console.log(killerOfPlants([1, 1, 1])) // 0 
  console.log(killerOfPlants([6, 5, 8, 4, 7, 10, 9])) //2
  console.log(killerOfPlants([1, 6, 5, 4, 3, 2])) //5
*/
  const n = p.length;
  let s = [{ index: 0, daysToDie: -1 }];
  let maxDaysToDie = 0;

  for (let i = 1; i < n; i++) {
    // we only care about the plants whose pesticide is smaller (potential killer)
    let daysToDie = 1;
    while (s.length > 0) {
      if (p[s[s.length - 1].index] >= p[i]) {
        // need to wait the front plants to die, like "1 5 4", 4 will die only after 5 died
        daysToDie = Math.max(daysToDie, s[s.length - 1].daysToDie + 1);
        s.pop();
      } // find the killer
      else {
        break;
      }
    }
    if (s.length === 0) {
      // this means no preceding plants have less pesticide than ith plant
      daysToDie = -1;
    }
    maxDaysToDie = Math.max(maxDaysToDie, daysToDie);
    s.push({ index: i, daysToDie });
  }

  return maxDaysToDie;
};

const theStockSpanProblem = (input: number[]) => {
  /*
input: [100, 80, 60, 70, 60, 75, 85]
result: {1, 1, 1, 2, 1, 4, 6}
  */
  const n = input.length;
  let stack = [0];
  let span = [1];
  for (let i = 1; i < input.length; i++) {
    const price = input[i];
    while (price > input[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length === 0) span.push(1);
    else span.push(i - stack[stack.length - 1]);

    stack.push(i);
  }
  return span;
};
