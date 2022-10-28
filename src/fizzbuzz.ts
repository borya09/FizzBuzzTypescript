export const hello = () => "hello";

export const fizzbuzz = () => {
  const values: string[] = [];

  for (let i = 1; i <= 100; i++) {
    const alias = isFizzOrBuzz(i);
    values.push(alias + i);
  }

  return values;
};

export const isFizzOrBuzz = (numberToCheck: number): string => {
  let alias = "";

  if (numberToCheck % 3 === 0) {
    alias = "fizz";
  }

  if (numberToCheck % 5 === 0) {
    alias += "buzz";
  }
  return alias;
};
