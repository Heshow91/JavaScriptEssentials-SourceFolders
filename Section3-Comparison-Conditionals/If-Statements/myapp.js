let carsLeft  = 0,
    carsRight = 0,
    greenMan  = "yes";

if( greenMan === "yes" )
{
    console.log( 'cross the road');
}
else if ( greenMan === "yes" && (carsLeft === 0 || carsRight ===0)) // = false
    // (greeeMan === "yes" && carsLeft === 0 || carsRight === 0 ) = true
{   
    console.log('All clear! Cross the road');
}
else {
    console.log("stay where you are!")
}
