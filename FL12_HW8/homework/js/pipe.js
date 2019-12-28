const pipe = (num, ...args) => args.reduce((acc, val) => val(acc), num);
const addOne = (x) => x + 1;
pipe(1, addOne, addOne);
