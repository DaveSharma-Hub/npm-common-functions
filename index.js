function objectToArray(objectValue){
    return objectValue ? Object.entries(objectValue) : [];
}

function objectArrayToArray(objectArray){
    let array = []
    if(!objectArray) return array;
    objectArray.map((item)=>{
        array.push(objectToArray(item));
    })
    return array;
}

function splitString(stringValue,delimeter){
    let array=[];
    let tmp = [];
    for(let i=0;i<stringValue.length;i=i+1){
        if(stringValue[i]===delimeter){
            array.push(tmp);
            tmp = [];
        }else{
            tmp.push(stringValue[i]);
        }
    }
    array.push(tmp);
    return array;
}

function findInArray(array,element){
    return array.find((item)=>item===element);
}

function findExactInObjectArray(array,item){
    let value = [];
    array.map((element)=>{
        const objectMatch = Object.entries(element).filter((eachItem)=>
            eachItem[1]===item
        )
        if(objectMatch.length>0) {
            value.push(element);
        }
    })
    return value;
}

function findInObject(objectValue,item){
    return Object.entries(objectValue).find((element)=>
        element[1]===item)
}

function keyExists(objectValue,key){
   return Object.entries(objectValue).find((element)=>
        element[0]===key)
}

/*
objectArray : aray of objects
func : function comparison that accepts a currentValue and compareValue 
    eg. function comp(currentValue,compareValue){
          return currentValue>=compareValue ? true : false;
        }
compareValue : value comparing with specified value in array
key : which value based on the key in the array object you want to compare
*/
function comparison(objectArray,func,compareValue,key){ // func accepts 2 arguments as comparison
    const tmp = Object.entries(objectArray).filter((item)=>
        item[1][key] ? func(item[1][key],compareValue) : false);
    let array = [];
    tmp.map((eachItem)=>array.push(eachItem[1]));
    return array;
}

function sortObjectArray(objectArray,key){
    let tmp = [];
    let arrayMap = {};
    Object.entries(objectArray).map((item)=>{
        if(item[1][key]){
            arrayMap[item[1][key]] = item[1];
            tmp.push(item[1][key]);
        }
    });
    tmp.sort();
    let sortedArray = [];  
    tmp.map((item)=>{
        sortedArray.push(arrayMap[item]);
    })
    return sortedArray;
}

module.exports = {
    objectToArray:objectToArray,
    objectArrayToArray: objectArrayToArray,
    splitString:splitString,
    findInArray:findInArray,
    findExactInObjectArray:findExactInObjectArray,
    findInObject:findInObject,
    keyExists: keyExists,
    comparison:comparison,
    sortObjectArray:sortObjectArray
};