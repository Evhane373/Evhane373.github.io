function Day2Part1(input) 
{
   input = input.replaceAll(',', '');
   let inputLine = input.split('\n');
   let total = 0;
   
   for(let x = 0; x < inputLine.length; x++)
   {
      console.log(inputLine[x]);
      game = inputLine[x].split(':')[0].split(' ')[1];
      let valid = true;
      rolls = inputLine[x].split(':')[1].split(';');
      
      for(let y = 0; y < rolls.length; y++)
      {
         rolls[y] = rolls[y].trim();
      }
      console.log(rolls);
      for(let y = 0; y < rolls.length; y++)
      {
         round = rolls[y].split(' ');
         for(let z = 0; z < round.length; z+=2)
         {
            console.log(round[z] + " " + round [z+1]);
            if((round[z] > 12 && round[z+1] == 'red') || (round[z] > 13 && round[z+1] == 'green') || (round[z] > 14 && round[z+1] == 'blue'))
            {
               valid = false;
            }
         }
      }
      if(valid)
      {
         total += parseInt(game);
         console.log("True: " + game + " Total: " + total);
      }
      else
      {
         console.log("False " + game);
      }
   }
   return(total);
}
function Day2Part2(input)
{
	input = input.replaceAll(',', '');
   let inputLine = input.split('\n');
   let power = 0;
   
   for(let x = 0; x < inputLine.length; x++)
   {
      console.log(inputLine[x]);
      game = inputLine[x].split(':')[0].split(' ')[1];
      rolls = inputLine[x].split(':')[1].split(';');
      
      let redMin = 0;
      let greenMin = 0;
      let blueMin = 0;
      
      for(let y = 0; y < rolls.length; y++)
      {
         rolls[y] = rolls[y].trim();
      }
      console.log(rolls);
      for(let y = 0; y < rolls.length; y++)
      {
         round = rolls[y].split(' ');
         for(let z = 0; z < round.length; z+=2)
         {
            if(round[z] > redMin && round[z+1] == 'red')
            {
               redMin = round[z];
            }
            else if(round[z] > greenMin && round[z+1] == 'green')
            {
               redMin = round[z];
            }
            else if(round[z] > blueMin && round[z+1] == 'blue')
            {
               redMin = round[z];
            }
         }
         power += redMin * greenMin * blueMin;
         console.log(power + "|" redMin + "|" greenMin + "|" blueMin);
      }
   }
   return(total);
}