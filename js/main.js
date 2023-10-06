let numbers=[1,2,3,4,5];
document.write(`[${numbers}] <br><br>`);

let calBack=(array,iterate)=>{
    iterate(array)
}
let iterate=(array)=>{
    array.forEach((e)=> {
        console.log(e);
        document.write(`${e} <br>`)
    });
}
calBack(numbers,iterate);