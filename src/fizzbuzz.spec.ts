import { hello } from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("hello", () => {
    expect(hello()).toEqual("hello");
  });
});
