const lodash = require('lodash');

const object1 = {
    id: 2,
    name: 'Przyjaciele',
    startYear: 1994,
    endYear: 2004,
    type: ["Komedia"],
    seasons: 10
};
const object2 = {
    id: 2,
    name: 'Przyjaciele edytowany',
    startYear: 1994,
    endYear: 2010,
    type: ["Komedia"],
    seasons: 10
};

const detectChanges =(original, modified)=>{
    return lodash.differenceWith(lodash.toPairs(modified), lodash.toPairs(original), lodash.isEqual);
}

console.log(detectChanges(object1, object2));
