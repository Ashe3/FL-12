const countNumbers = (strArg) => (
  strArg.split('').filter(e => !Number.isNaN(+e)).reduce((acc, val) => {
    val in acc ? acc[val] += 1 : acc[val] = 1;
    return acc;
  }, {}));
countNumbers('jdjjka000466588kkkfs662555');