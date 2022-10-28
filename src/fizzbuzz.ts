export const run = (): string[] => {
  const numbers: string[] = [];

  for (let i = 1; i <= 100; i++) {
    const value = runNumber(i);
    numbers.push(value);
  }

  return numbers;
};

export const runNumber = (aNumber: number): string => {
  const fizz: string = "Fizz";
  const buzz: string = "Buzz";
  let value = "";

  const strategies: {
    order: number;
    canHandle: (i: number, currentValue: string) => boolean;
    execute: (i: number, currentValue: string) => string;
  }[] = [
    {
      order: 1,
      canHandle: (i, _) => i % 3 == 0,
      execute: (_, currentValue) => currentValue + fizz,
    },
    {
      order: 2,
      canHandle: (i, _) => i % 5 == 0,
      execute: (_, currentValue) => currentValue + buzz,
    },
    {
      order: 3,
      canHandle: (_, currentValue) => currentValue === "",
      execute: (i, _) => i.toString(),
    },
  ];

  strategies
    .sort((a, b) => (a > b ? -1 : 1))
    .forEach((strategy) => {
      if (strategy.canHandle(aNumber, value)) {
        value = strategy.execute(aNumber, value);
      }
    });

  return value;
};
