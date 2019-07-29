```
npm install
MONGOFILEPATH=CSV_1 POSTGRESFILEPATH=CSV_2 npm run parse

get by individual file
FILEPATH=${POSTGRESFILEPATH} node index.js > ${POSTGRESFILEPATH}_processed.js
```