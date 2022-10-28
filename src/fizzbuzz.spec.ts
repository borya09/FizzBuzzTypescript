import { hello, isFizzOrBuzz } from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("hello", () => {
    expect(hello()).toEqual("hello");
  });
});

describe("if number is divisible by", () => {
  it("3 then fizz", () => {
    const dummies: number[] = [6, 9, 12, 18, 24, 27];

    dummies.forEach((dummy) => {
      expect(isFizzOrBuzz(dummy)).toEqual("fizz");
    });
  });

  it("5 then buzz", () => {
    const dummies: number[] = [5, 10, 20, 25, 35];

    dummies.forEach((dummy) => {
      expect(isFizzOrBuzz(dummy)).toEqual("buzz");
    });
  });

  it("3 and 5 then fizzbuzz", () => {
    const dummies: number[] = [15, 30, 90, 120, 150];

    dummies.forEach((dummy) => {
      expect(isFizzOrBuzz(dummy)).toEqual("fizzbuzz");
    });
  });

  it("none then empty", () => {
    const dummies: number[] = [2, 7, 11, 13, 17];

    dummies.forEach((dummy) => {
      expect(isFizzOrBuzz(dummy)).toEqual("");
    });
  });
});
