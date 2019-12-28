const makeNumber = (string) => string.split('').filter(e => !Number.isNaN(+e)).join('');
makeNumber('ijifjgdj');