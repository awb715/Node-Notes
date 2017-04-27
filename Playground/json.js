//var obj = {
//    
//    name:'Aaron'
//    
//};
//
//var stringObj = JSON.stringify(obj);
//JSON to string
//console.log(typeof stringObj);
//console.log(stringObj);


//converts tring to original object
var personString = '{"name":"Aaron","age":22}';
var person = JSON.parse(personString);

console.log(typeof person);
console.log(person);