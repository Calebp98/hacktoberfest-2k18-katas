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
  
  
 	 if(typeof(level) != 'number');
    {
      throw new typeError("no level provided")
    }

  var tree = "";
    for(i = 0; i < level; i++)
        {
        tree += " ".repeat(level-i);
        tree += "x".repeat(2*i+1) ;
        tree += "\n";
        }
			tree += " ".repeat(level);
			tree += "I";
    return tree;
};
