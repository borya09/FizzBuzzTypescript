import { fizzbuzz } from "./fizzbuzz";

describe("FizzBuzz", () => {
  const cases: {input: number, expected: string}[] = [
    { input:1, expected:"1"},
    { input:2, expected:"2"},
    { input:3, expected:"Fizz"},
    { input:5, expected:"Buzz"},
    { input:6, expected:"Fizz"},
    { input:7, expected:"7"},
    { input:8, expected:"8"},
    { input:9, expected:"Fizz"},
    { input:10, expected:"Buzz"},
    { input:13, expected:"Fizz"},
    { input:15, expected:"FizzBuzz"},
  ];
  test.each(cases)(
    "retuns %p when %p is given",
    ({input, expected}) => {
      expect(fizzbuzz(input)).toEqual(expected);
    }
  );
});
