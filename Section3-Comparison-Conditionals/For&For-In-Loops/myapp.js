let classRegister = [ "Hisham", "Wayel", "Mustafa" ];

console.log(classRegister[0]);
console.log("***********");
for( let i = 0; i < classRegister.length; i++ )
{
    console.log( classRegister[ i ] );
}
console.log("**********");
for( let i = classRegister.length - 1;   i >= 0;  i-- )
{
    console.log( classRegister[ i ] );
}
console.log("***********");
for( let index in classRegister )
{
    console.log( classRegister[ index ] );
}
