// function sum(array) {
//     let sum = 0,
//         ticks = 1;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//         ticks++;
//     }
//     return { result: sum, ticks };
// }
// console.log(sum([1, 2, 3]));
// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// // prettier-ignore
// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));

// function getRandomItem(array) {
//     let ticks = 0;
//     const item = array[Math.floor(Math.random() * array.length)];
//     ticks++;
//     return {
//         result: item,
//         ticks: ticks
//     };
// }

// console.log(getRandomItem([1, 2, 3]));
// // prettier-ignore
// console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]))

// function howManyLessThanNitems(arr, n) {
//     let ticks = 0;
//     /* If the 1st element in the array is greater than `n`, return 0,
//        because no items in the array are less than `n`. */
//     if (!arr.length || arr[0] >= n) {
//         ticks++;
//         return 0;
//     }

//     let lowIndex = 0,
//         highIndex = arr.length;

//     while (highIndex > lowIndex) {
//         // Find midpoint
//         let midIndex = Math.floor((highIndex + lowIndex) / 2);
//         /* If `midIndex` element is greater than `n`, that means all elements
//            to the right of `midIndex` are also greater than `n`, so
//            we only need to focus on elements to the left of `midIndex`.
//            We set `highIndex` to the current value of `midIndex` so next time
//            through the loop, we'll only look at the left half */
//         if (arr[midIndex] >= n) {
//             highIndex = midIndex;
//             ticks++;
//         } else if (arr[midIndex + 1] < n) {
//             /* If the element to the right of `midIndex` is less than `n`, then we
//            know that we need to check the items to the right of `midIndex`, so
//            we set `lowIndex` to the current value of `midIndex`, so that next
//            time through the loop we only look at the right side */
//             lowIndex = midIndex;
//             ticks++;
//         } else {
//             /* Otherwise, if the element to the right of `midIndex` is greater
//            than or equal to `n`, we know that the item at `midIndex` is the last
//            item that's less than `n`, so we return `midIndex +  1` to get the total
//            number of items that are less than `n` */
//             ticks++;
//             return {
//                 result: midIndex + 1,
//                 ticks: ticks
//             };
//         }
//     }
// }
// console.log(howManyLessThanNitems([1, 2, 3], 2));
// // prettier-ignore
// console.log(howManyLessThanNitems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 99 ))

// function findMin(array) {
//     let min = array[0],
//         ticks = 1;
//     for (let i = 1; i < array.length; i++) {
//         ticks++;
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return {
//         result: min,
//         ticks: ticks
//     };
// }
// console.log(findMin([1, 2, 3]));
// console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// // prettier-ignore
// console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]))

// function hasDuplicates(array) {
//     let ticks = 0,
//         result = false;
//     for (let i = 0; i < array.length; i++) {
//         ticks++;
//         for (let j = 0; j < array.length; j++) {
//             ticks++;
//             if (array[i] == array[j] && i != j) {
//                 result = true;
//             }
//         }
//     }
//     return {
//         result: result,
//         ticks: ticks
//     };
// }

// console.log(hasDuplicates([1, 2, 2]));
// console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));
// // prettier-ignore
// console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 99]))

// function countTriangle(layers) {
//     let ticks = 1;
//     let count = 0; // the number of dots we've counted so far
//     let layer = 0; // the current layer we're on
//     let lastLayer = 1; // the number of dots we counted in the previous layer
//     while (layer < layers) {
//         ticks++;
//         let newLayer = 0; // the number of dots we've counted so far in the current layer
//         for (let i = 0; i < lastLayer; i++) {
//             ticks++;
//             newLayer += 2;
//         }
//         lastLayer = newLayer;
//         count += lastLayer;
//         layer++;
//     }
//     return {
//         result: count,
//         ticks: ticks
//     };
// }

// console.log(countTriangle(2));
// console.log(countTriangle(4));
// console.log(countTriangle(20));

// ==========================================
// ==========================================
// ==========================================
//        =======ASSIGNMENT=======
// ==========================================
// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

Constant time - O(1)

// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

Linear time - O(n)
n constant time oper required

// Even or odd
// What is the Big O of the following algorithm? Explain your answer

// function isEven(value) {
//     if (value % 2 == 0) {
//         return true;
//     }
//     else
//         return false;
//     }
// }

Constant time - O(1)
as only one expression is being evaluated


// Are you here?
// What is the Big O of the following algorithm? Explain your answer

// function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

Polynomial time - O(n^k)
2 levels of looping over an input


// Doubler
// What is the Big O of the following algorithm? Explain your answer

// function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }

Linear time - O(n)
n number of loop overs required


// Naive search
// What is the Big O of the following algorithm? Explain your answer

// function naiveSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }
Linear time - O(n) in the worst case scenario
n number of loop overs required to find the item


// Creating pairs:
// What is the Big O of the following algorithm? Explain your answer

// function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i] + ", " +  arr[j] );
//         }
//     }
// }
Polynomial time - O(n^k)
2 levels of looping


// Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

// function compute(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {

//         if (i === 1) {
//             result.push(0);
//         }
//         else if (i == 2) {
//             result.push(1);
//         }
//         else {
//             result.push(result[i - 2] + result[i - 3]);
//         }
//     }
//     return result;
// }
Linear time - O(n)
n number of loop overs required


// An efficient search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

// function efficientSearch(array, item) {
//     let minIndex = 0;
//     let maxIndex = array.length - 1;
//     let currentIndex;
//     let currentElement;

//     while (minIndex <= maxIndex) {
//         currentIndex = Math.floor((minIndex + maxIndex) / 2);
//         currentElement = array[currentIndex];

//         if (currentElement < item) {
//             minIndex = currentIndex + 1;
//         }
//         else if (currentElement > item) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }
//     return -1;
// }
Logarithmic time - O(log(n))
Each looping cuts the size of problem in half


// Random element
// What is the Big O of the following algorithm? Explain your answer

// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }
Constant time - O(1)
Only runs one time


// What Am I?
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

// function isWhat(n) {
//     if (n < 2 || n % 1 != 0) {
//         return false;
//     }
//     for (let i = 2; i < n; ++i) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }
Linear time - O(n)
n number of loop overs required
function checks if supplied number is prime?


// Tower of Hanoi
// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

// There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
// The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
// Input:

// Rod A	Rod B	Rod C
// ----		
// ---------		
// -------------		
// Output:

// Rod A	Rod B	Rod C
//                  ----
//                  ---------
//                  -------------
// Derive an algorithm to solve the Tower of Hanoi puzzle.
// Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// What is the runtime of your algorithm?



// Iterative version
// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.
function sheep(num) {
    for(let i = 0; i < num; i++) {
        console.log(`${num - i}: Another sheep jump over the fence`)
    }
    console.log(`All sheep jumped over the fence`)
}
sheep(3)

function powerCalc(num1, num2) {
    let result = 1;
    for (let i = 0; i < num2; i++) {
        result = result * num1;
    }
    console.log(result)
}
powerCalc(10, 2)
powerCalc(10, -2)

function reverse(str) {
    let result = ""
    for ( let i = str.length - 1; i >= 0; i-- ) {
        result += str[i];
    }
    console.log(result);
}
reverse("reverse this")

function triangular(num) {
    let result = 0;
    for ( let i = 0; i <= num; i++) {
        result += i;
    }
    console.log(result)
}
triangular(3)

function splitter(string, separator) {
    let result = ''
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== separator) {
            result += string[i]
        }
    }
    console.log(result)
}

splitter('02/20/2020', '/')

function binary(num) {
    let result = '';
    while ( num > 0 ) {
        result = (num % 2).toString() + result;
        num = Math.floor(num / 2);
    }
    return result;
}
binary(12)

function fibonacci(num) {
    let result = [];
    for ( let i = 0; i <= num; i++ ) {
        if ( i === 0 ) {
            result.push(0);
        } else if ( i === 1) {
            result.push(1);
        } else {
            result.push(result[i - 2] + result[i - 1]);
        }
    }
    return result;
}


// Recursive Big O
// Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.



// Iterative Big O
// Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.