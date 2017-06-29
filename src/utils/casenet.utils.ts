//object is the input
//args is a series of arguments to appy to this pipe
export function transformObjectToArray(object:any): any {
    let array:any[] = [];
    for(let key in object){
        array.push({
            label: key,
            value: object[key]
        });
    }

    return array;
}