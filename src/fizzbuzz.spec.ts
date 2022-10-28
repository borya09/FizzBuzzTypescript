import { run, runNumber } from "./fizzbuzz";

describe("FizzBuzz", () => {
  it.only("Returns all", () => {
    expect(run()).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
      "16",
      "17",
      "Fizz",
      "19",
      "Buzz",
      "Fizz",
      "22",
      "23",
      "Fizz",
      "Buzz",
      "26",
      "Fizz",
      "28",
      "29",
      "FizzBuzz",
      "31",
      "32",
      "Fizz",
      "34",
      "Buzz",
      "Fizz",
      "37",
      "38",
      "Fizz",
      "Buzz",
      "41",
      "Fizz",
      "43",
      "44",
      "FizzBuzz",
      "46",
      "47",
      "Fizz",
      "49",
      "Buzz",
      "Fizz",
      "52",
      "53",
      "Fizz",
      "Buzz",
      "56",
      "Fizz",
      "58",
      "59",
      "FizzBuzz",
      "61",
      "62",
      "Fizz",
      "64",
      "Buzz",
      "Fizz",
      "67",
      "68",
      "Fizz",
      "Buzz",
      "71",
      "Fizz",
      "73",
      "74",
      "FizzBuzz",
      "76",
      "77",
      "Fizz",
      "79",
      "Buzz",
      "Fizz",
      "82",
      "83",
      "Fizz",
      "Buzz",
      "86",
      "Fizz",
      "88",
      "89",
      "FizzBuzz",
      "91",
      "92",
      "Fizz",
      "94",
      "Buzz",
      "Fizz",
      "97",
      "98",
      "Fizz",
      "Buzz",
    ]);
  });

  //describe(FizzBuzz, () => {
  //
  //  it(Returns Fizz for 30, () => {
  //    expect(runNumber(30)).toEqual(FizzBuzz);
  //  });
  //  it(Returns FizzBuzzBuzz for 35, () => {
  //    expect(runNumber(35)).toEqual(FizzBuzzBuzz);
  //  });
  //  it(Returns Buzz for 50, () => {
  //    expect(runNumber(50)).toEqual(Buzz);
  //  });
  //  it(Returns Buzz for 55, () => {
  //    expect(runNumber(55)).toEqual(Buzz);
  //  });
  //  it(Returns FizzBuzz for 53, () => {
  //    expect(runNumber(53)).toEqual(FizzBuzz);
  //  });
  //});
});

/*
Devuelve Fizz si el número es divisible por 3.
Devuelve Buzz si el número es divisible por 5.
Devuelve FizzBuzz si el número es divisible por 3 y por 5.

1
2
Fizz
4

Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
... etc hasta el 100
*/
