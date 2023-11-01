function Day2Part1(input)
{
   let inputArray = input.split("\n");
   let totalArea = 0;
   for(let x = 0; x < inputArray.length; x++)
   {
      totalArea += getSurfaceArea(inputArray[x]);
   }
   return totalArea;
}
function Day2Part2()
{
   
}

function getSurfaceArea(dim)
{
   let sides = dim.split("x");
   area = (2 * (sides[0] * sides[1]))
   + (2 * (sides[0] * sides[2]))
   + (2 * (sides[1] * sides[2]))
   + smallestSide(dim);
}

function getSmallestSide(dim)
{
   let sides = dim.split("x");
   let smallestSide = sides[0] * sides[1];
   
   if(smallestSide > (sides[0] * sides[2]))
   {
      smallestSide = (sides[0] * sides[2])
   }
   if(smallestSide > (sides[1] * sides[2]))
   {
      smallestSide = (sides[1] * sides[2])
   }
   return smallestSide;
}