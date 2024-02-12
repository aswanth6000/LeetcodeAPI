
let stringVal = "happy new year"
var arr_val =  [5,6,2,1,4,3];
let str=" "
for(let i=0;i<arr_val.length;i++){
    let a=stringVal.indexOf(arr_val[i]+1)
    str+=a+"-"
}
console.log(str)