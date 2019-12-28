const getMin = (...args) => args.reduce((acc, val) => acc > val ? val : acc);
getMin(3, 0, -3);