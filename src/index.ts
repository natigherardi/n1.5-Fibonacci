import getFibonacci from "./getFibonacci/getFibonacci";

const getExecutionTime = () => {
  const results = [];
  for (let i = 1; i <= 1000000; i *= 10) {
    const start = process.hrtime();
    getFibonacci(i);
    const resultTime = process.hrtime(start);
    results.push({ number: i, time: resultTime[1] });
  }
  console.log(results);
};

getExecutionTime();
