function name(fullname) 
{
    return fullname();
}
console.log(
    name(function () { return "embed" }));
// console.log(
//     name({firstname:"Hisham", lastname:"Raihan"}))
//     ;