function Day2Part1(input) 
{
   let inputLine = input.split('\n');
   let total = 0;
   
   for(let x = 0; x < inputLine.length; x++)
   {
      game = inputLine[x].split(':')[0];
      console.log(game);
      let valid = true;
      rolls = game[1].split(';');
      for(let y = 0; y < 3; y++)
      {
         round = rolls[y].split(' ');
         for(let z = 0; z < round.length; z+=2)
         {
            if((round[z] > 12 && round[z] == 'red') || (round[z] > 13 && round[z] == 'green') || (round[z] > 14 && round[z] == 'blue'))
            {
               valid = false;
            }
         }
      }
      if(valid)
      {
         total += game[1];
      }
   }
   
   return(total);
}
function Day2Part2(input)
{
	
}