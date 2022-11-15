import getFibonacci from "./getFibonacci/getFibonacci";

const getExecutionTime = () => {
  for (let i = 0; i >= 1000; i *= 10) {
    console.time("fibonacci");
    getFibonacci(i);
    console.timeEnd("fibonacci");
  }
};

export default getExecutionTime;
