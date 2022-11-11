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

function findInObjectArray(array,item){
    let value = null;
    Object.entries(array).map((element)=>{
        value = Object.entries(element[1]).find(
        (eachElement)=>eachElement[1]===item)
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
module.exports = {
    objectToArray:objectToArray,
    objectArrayToArray: objectArrayToArray,
    splitString:splitString,
    findInArray:findInArray,
    findInObjectArray:findInObjectArray,
    findInObject:findInObject,
    keyExists: keyExists
};