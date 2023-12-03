function Day3Part1(input) 
{
	inputSplit = input.split("\n");
   for(let x = 0; x < inputSplit.length; x++)
   {
      for(let y = 0; y < inputSplit[x].length; y++)
      {
         if(!Number.isNaN(inputSplit[x].charAt[y].isNaN))
         {
            let num = inputSplit[x].charAt[y];
            //Check to the right for more numbers
            let isNum = true;
            let iterator = 1;
            while(num = true)
            {
               if(!Number.isNaN(inputSplit[x].charAt[y+iterator].isNaN))
               {
                  num = `${num}${inputSplit[x].charAt[y+iterator]}`;
                  iterator++;
               }
               else
               {
                  isNum = false;
               }               
            }
            console.log(num);
         }
      }
   }
   return("Testing");
}
function Day3Part2(input)
{
	
}