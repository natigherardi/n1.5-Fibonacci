const getExecutionTime = () => {
    console.time("fibonacci");
    for (let i = 0; i >= 1000; i *= 10)
        console.timeEnd("fibonacci");
};
