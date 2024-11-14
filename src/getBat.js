
const bat = require('./batData.js');

// // sum value in Ppv1 key
// const sumPpv1 = pv.reduce((acc, cur) => acc + cur.Ppv1, 0);
// console.log(sumPpv1);

// loop all keys in pvData to print sum, std of each key
const keys = Object.keys(bat[0]);
for (const key of keys) {
    if (key === 'timestamp' || key === 'createdAt' || key === 'updatedAt' || key === 'site' || key === 'section') {
        continue;
    }
    const sum = bat.reduce((acc, cur) => acc + cur[key], 0);
    const mean = sum / bat.length;
    const std = Math.sqrt(bat.reduce((acc, cur) => acc + Math.pow(cur[key] - mean, 2), 0) / bat.length);
    console.log(key + '| sum = ' + sum + '| mean = ' + mean + '| std = ' + std);
}
