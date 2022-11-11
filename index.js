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

module.exports = {
    objectToArray:objectToArray,
    objectArrayToArray: objectArrayToArray,
    splitString:splitString
};