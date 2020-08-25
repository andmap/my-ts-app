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
