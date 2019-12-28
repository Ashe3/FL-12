const isLeapYear = (dateArg) => {
  const date = new Date(dateArg);
  const year = date.getFullYear();
  if (Number.isNaN(year)) {
    return date + '';
  }
  const isLeap = (year) => {
    if (year % 4 !== 0) {
      return false;
    } else if (year % 100 !== 0) {
      return true;
    } else if (year % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  }
  return `${year} is${!isLeap(year) ? ' not' : ''} a leap year`;
}
isLeapYear(1213131313);