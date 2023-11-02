function Day2Part1(input)
{
   let inputArray = input.split("\n");
   let totalArea = 0;
   for(let x = 0; x < inputArray.length; x++)
   {
      let sides = inputArray[x].split("x");
      totalArea += (2 * sides[0] * sides[1])
      + (2 * sides[0] * sides[2])
      + (2 * sides[1] * sides[2]);
      
      sides.sort(function(a, b){return a - b});
      totalArea += sides[0] * sides[1];
	  console.log(sides);
	  console.log(totalArea);
   }
   return totalArea;
}

function Day2Part2(input)
{
   let inputArray = input.split("\n");
   let ribbon = 0;
   for(let x = 0; x < inputArray.length; x++)
   {
      let sides = inputArray[x].split("x");
      sides.sort(function(a, b){return a - b});
      ribbon += 2 * sides[0] + 2 * sides[1];
	  ribbon += sides[0];
	  ribbon += sides[1];
	  ribbon += sides[2];
   }
   return ribbon;
}