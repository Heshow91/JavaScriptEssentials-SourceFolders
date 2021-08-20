function Apple( x, y, color, weight )
{   
    this.x = x; // this refers to the new object assigned
    this.y = y;
    this.color = color;
    this.weight = weight;

   
}
Apple.prototype = {
    giveToShinigami(){return "Shinigami ate the apple"},
    eat(){return "Eating Apple"}, 
    throw(){return "Im done"}
};

var apple1 = new Apple( 10, 20, "red", 99 ); // assigning new context 
var apple2 = new Apple( 100, 200, "green", 109 );//each instance is seperate from another
var apple3 = new Apple( 20, 200, "pink", 200 );