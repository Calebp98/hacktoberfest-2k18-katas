export const christmasTree = (level) => {
  // Implement a function the return a christmas tree
  // as a string

  // The level parameter defines how many levels the
  // tree should contain

  // Example tree with 3 levels
  //   X
  //  XXX
  // XXXXX
  //   I

  // If no level is provided the function should throw an error
console.log(typeof level)
  if(typeof level != 'number')
 {
   throw new TypeError("no level provided")
 }

var tree = "";
var i = 0;
for(i = 0; i < level; i++)
     {
     tree += " ".repeat(level-i-1);
     tree += "X".repeat(2*i+1) ;
     tree += " ".repeat(level-i-1);
     tree += "\n";
     }
   tree += " ".repeat(level-1);
   tree += "I";
   tree += " ".repeat(level-1);
   tree += "\n"

 return tree;
};


console.log(christmasTree(3))
