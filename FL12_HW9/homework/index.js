const convert = (...args) => {
  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] === 'number') {
      args[i] = String(args[i]);
    } else {
      args[i] = Number(args[i]);
    }
  }
  return args
}

console.log(convert('1', 2, 3, '4'));

const executeforEarch = (list, iterFunc) => {
  for (const arg of list) {
    iterFunc(arg);
  }
}

executeforEarch([1, 2, 3], (e) => console.log(e * 2));

const mapArray = (list, iterFunc) => {
  const res = [];
  executeforEarch(list, e => res.push(iterFunc(+e)));
  return res;
}

console.log(mapArray([2, '5', 8], (e) => e + 3));

const filterArray = (list, iterFunc) => {
  const res = [];
  executeforEarch(list, e => {
    if (iterFunc(e)) {
      res.push(e);
    }
  });
  return res;
}

console.log(filterArray([2, 5, 8], e => e % 2 === 0));

const flipOver = (str) => {
  let res = '';
  for (const sym of str) {
    res = `${sym}${res}`;
  }
  return res;
}

console.log(flipOver('Hello world'));

const makeListFromRange = (range) => {
  const res = [];
  for (let i = range[0]; i <= range[1]; i += 1) {
    res.push(i);
  }
  return res;
}

console.log(makeListFromRange([2, 7]));

const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

const getArrayOfKeys = (obj, key) => {
  const res = [];
  executeforEarch(obj, e => res.push(e[key]));
  return res;
}

console.log(getArrayOfKeys(actors, 'name'));

const substitute = (list) => mapArray(list, e => e < 30 ? '*': e);

console.log(substitute([58, 14, 48, 2, 31, 29]))

const dateVar = new Date(2019, 0, 2);

const getPastDay = (date, days) => {
  const dayMs = 86400000;
  const newDate = new Date(date - dayMs * days);
  return newDate.getDate();
}

console.log(getPastDay(dateVar, 14));

const formatDate = (date) => {
  const getTimeValue = (time) => time < 10 ? `0${time}` : time;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = getTimeValue(date.getHours());
  const minutes = getTimeValue(date.getMinutes());
  return `${year}/${month}/${day} ${hours}:${minutes}`
}

console.log(formatDate(new Date()));
