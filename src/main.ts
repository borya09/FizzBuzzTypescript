import { fizzbuzz } from "./fizzbuzz";
console.log(Array.from({length: 100}, (value, key) => key).map(fizzbuzz))