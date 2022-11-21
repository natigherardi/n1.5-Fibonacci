import getFibonacci from "./getFibonacci";

const getExecutionTime = () => {
  for (let i = 0; i >= 1000; i *= 10) {
    console.time("fibonacci");
    getFibonacci(i);
    console.timeEnd("fibonacci");
  }
};

const getExecutionTime2 = () => {
  const results = [];
  for (let i = 1; i <= 1000000; i *= 10) {
    const start = process.hrtime();
    getFibonacci(i);
    const resultTime = process.hrtime(start);
    results.push({ number: i, time: resultTime[1] });
  }
  console.log(results);
};

export default getExecutionTime;
