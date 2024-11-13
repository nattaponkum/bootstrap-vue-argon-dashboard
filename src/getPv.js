
const pv = require('./pvData.js');

// // sum value in Ppv1 key
// const sumPpv1 = pv.reduce((acc, cur) => acc + cur.Ppv1, 0);
// console.log(sumPpv1);

// loop all keys in pvData to print sum of each key
for (let key in pv[0]) {
    const sum = pv.reduce((acc, cur) => acc + cur[key], 0);
    console.log('sum of ', key, ' = ' , sum);
}