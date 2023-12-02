function Day2Part1(input) 
{
	game = input.split(":")[0];
   console.log(game);
   rolls = input.split(":")[1].split(";");
   console.log(rolls);
   
   return(game + rolls[0]);
}
function Day2Part2(input)
{
	
}