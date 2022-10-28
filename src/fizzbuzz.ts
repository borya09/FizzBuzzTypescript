export const fizzbuzz = (number: number) : string => {
    if (isDivisibleByThree(number) && isDivisibleByFive(number)) return "FizzBuzz";
    if (isDivisibleByThree(number) || containsThree(number) ) return "Fizz";
    if (isDivisibleByFive(number)) return "Buzz";
    return `${number}`;
};

const isDivisibleByThree = (number: number) => number % 3 === 0;
const isDivisibleByFive = (number: number) => number % 5 === 0;
const containsThree = (number: number) => number.toString().split("").includes("3");