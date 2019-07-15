const _ = require("underscore");
const csv=require('csvtojson');
if (_.isUndefined(process.env.FILEPATH))
{
    console.log('FILEPATH is missing')
    process.exit();
}
const csvFilePath=`${process.env.FILEPATH}.csv`
let transaction_ids = [];
let transaction_types = [];
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    let i = 0;
    while (i < jsonObj.length) {
        transaction_ids.push(jsonObj[i].id);
        if (!transaction_types.includes(jsonObj[i].type))
        {
            transaction_types.push(jsonObj[i].type);
        }
        i++;
    }

    // print transaction ids in arrays
    console.log('//', jsonObj.length);
    console.log('module.exports = { types : ');
    console.dir(transaction_types, {'maxArrayLength': null});
    console.log(', ids : ');
    console.dir(transaction_ids, {'maxArrayLength': null})
    console.log('}')
})