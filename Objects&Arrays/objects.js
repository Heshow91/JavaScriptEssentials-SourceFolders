function name(fullname)
{


    return fullname();
    // function concat(name){
    //     return "MR."+ name; 
    // }
    // return concat(fullname);

}
//variable that contains a callable object
// var obj = function(){};
console.log(
    name (function(){return "embed";})
    );
// console.log(
//     name( { firstname:"Hisham",lastname:"Raihan"}) );