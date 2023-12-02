function Day2Part1(input) 
{
   let inputLine = input.split('\n');
   let total = 0;
   
   for(let x = 0; x < inputLine.length; x++)
   {
      game = inputLine[x].split(':')[0].split(' ')[1];
      console.log(game);
      let valid = true;
      rolls = inputLine[x].split(':')[1].split(';');
      console.log(rolls.trim());
      for(let y = 0; y < rolls.length; y++)
      {
         round = rolls[y].trim().split(' ');
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
         total += parseInt(game[1]);
      }
   }
   
   return(total);
}
function Day2Part2(input)
{
	
}