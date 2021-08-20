console.log( myName, printName() );

var myName = "Hisham";

function printName()
{
    
    var a = 100;
    
    function embed(){ return "hello"; }
    console.log( a, embed() )
    return "John Doe";
}