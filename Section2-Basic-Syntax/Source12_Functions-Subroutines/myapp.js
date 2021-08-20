function makeCoffee( sugar, milk )
{// set of instructions 
    var instructions = "Boil water,";
    
    instructions += " pour into cup,"; // += will concat the strings together
    
    instructions += " add coffee granules,";
    
    instructions += " add " + sugar + " spoons of sugar,";
    
    instructions += " add " + milk + "% milk.";
    
    return instructions;
}

console.log( makeCoffee( 2, 20 ) );