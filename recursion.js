let numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

sumNumbers = (nums) => {
  let sum = 0;
  nums.forEach((num) => {
    if (Array.isArray(num)) sum += sumNumbers(num);
    else sum += num;
  });
  return sum;
};

console.log(`The sum is ${sumNumbers(numbers, numbers.length)}`);
