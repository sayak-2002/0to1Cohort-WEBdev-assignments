/* 
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

const findLargestElement = (numbers) => { 
    let max_element = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < numbers.length; i++) {
        max_element = Math.max(max_element, numbers[i]);
    }
    return max_element;
}

const numbers = [7, 2, 1, 9, 3, 4];
console.log(findLargestElement(numbers));

module.exports = findLargestElement;