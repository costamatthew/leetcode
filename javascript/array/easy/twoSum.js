// n(0²)
function twoSum(nums, target) {
  const arrayToReturn = [];
  let finish = false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sumValues = nums[i] + nums[j];
      if (sumValues === target) {
        arrayToReturn.push(i, j);
        finish = true;
        break;
      }
    }

    if (finish) {
      break;
    }
  }

  return arrayToReturn;
}
//const result = twoSum([3, 2, 3], 6);
const result2 = twoSum([2, 5, 60, 5, 11], 10);

// console.log(result);
console.log(result2);
