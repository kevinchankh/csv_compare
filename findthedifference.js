const _ = require("underscore");
const akulaku = require(`./${process.env.MONGOFILEPATH}_processed.js`);
const postgres = require(`./${process.env.POSTGRESFILEPATH}_processed.js`);
// console.log(akulaku.length, postgres.length);
const difference = _.difference(akulaku.ids, postgres.ids);
// console.log(difference);
console.log('//',difference.length);
console.log('const difference = ');
console.dir(difference, {'maxArrayLength': null})
console.log(';');