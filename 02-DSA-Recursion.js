// const sumOf = function (list) {
//     // Base case
//     if (list.length === 1) {
//         return list[0]
//     }
//     // General case
//     return list[0] + sumof(list.slice(1))
// }

// let lst = [2, 4, 6, 8, 10]
// console.log(sumOf)

// Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

const sheep = (num) => {
    if (num === 0) {
        return `All sheep jumped over the fence`;
    }

    return `${num}: Another sheep jumps over the fence` + sheep(num - 1);
};

console.log(sheep(3));

// Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

const powerCalculator = (num1, num2) => {
    if (num2 <= 0) {
        return `exponent should be >= 0`;
    }

    return num1 ** num2;
};

console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));

// Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
const reverseString = function(str) {
    if (str.length < 2) {
        return str;
    }

    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
};

console.log(reverseString("Reverse this string"));

// nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
const nthTriangularNumber = (num) => {
    if (num <= 1) {
        return num;
    }

    return num + nthTriangularNumber(num - 1);
};

console.log(nthTriangularNumber(5));

// String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]
const stringSplitter = (string, splitter) => {
    if (string.length === 1) {
        return string[0] === splitter ? "" : string[0];
    }
    return (
        (string[0] === splitter ? "" : string[0]) +
        stringSplitter(string.slice(1, string.length), splitter)
    );
};
console.log(stringSplitter("02/20/2020", "/"));

// Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
const fibonacci = (num) => {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
};
console.log(fibonacci(7));

// 7. Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
const factorial = (num) => {
    if (num <= 1) {
        return num;
    }
    return num * factorial(num - 1);
};
console.log(factorial(5));

// Find a way out of the maze
// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

// You can use the following mazes to test your program.

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

// ==============ASK MENTOR==============

// Find ALL the ways out of the maze
// Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?

// Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD

// ==============ASK MENTOR==============

// Anagrams
// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

function anagrams(str) {
    let results = [];

    if (str.length === 1) {
        results.push(str);
        return results;
    }

    for (let i = 0; i < str.length; i++) {
        let leftOver = anagrams(str.substring(0, i) + str.substring(i + 1));
        for (let j = 0; j < leftOver.length; j++) {
            results.push(str[i] + leftOver[j]);
        }
    }
    return results;
}

console.log(anagrams("east"));

// Organization Chart
// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes

// ==============ASK MENTOR==============

// Binary Representation
// Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

const convertToBinary = (num) => {
    if (num === 0) {
        return "0";
    }
    const divideByTwo = Math.floor(num / 2);
    const mod = num % 2;
    return convertToBinary(divideByTwo) + mod.toString();
};

console.log(convertToBinary(25));
