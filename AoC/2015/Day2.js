function Day2Part1(input)
{
   let inputArray = input.split("\n");
   let totalArea = 0;
   for(let x = 0; x < inputArray.length; x++)
   {
      let sides = inputArray[x].split("x");
      totalArea += (2 * (sides[0] * sides[1]))
      + (2 * (sides[0] * sides[2]))
      + (2 * (sides[1] * sides[2]));
      console.log(area);
      
      sides.sort(function(a, b){return b - a});
      totalArea += sides[1];
      
      return totalArea;
   }
}  
function Day2Part2()
{
   let inputArray = input.split("\n");
   for(let x = 0; x < inputArray.length; x++)
   {
      let sides = inputArray[x].split("x");
      sides.sort(function(a, b){return b - a});
      
      
   }
   
}