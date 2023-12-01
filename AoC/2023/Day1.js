function Day1Part1(input) 
{
	let firstNumber;
	let lastNumber;
	let total = 0;
	const inputSplit = input.split('\n');
	
	for(let x = 0; x < inputSplit.length; x++)
	{
		firstNumber = -1;
		lastNumber = -1;
		for(let y = 0; y < inputSplit[x].length; y++)
		{
			if(Number.isNaN(parseInt(inputSplit[x].charAt(y))) == false)
			{
				if(firstNumber == -1)
				{
					firstNumber = inputSplit[x].charAt(y);
					lastNumber = inputSplit[x].charAt(y);
				}
				else
				{
					lastNumber = inputSplit[x].charAt(y);
				}
			}
		}
		console.log('fn:' + firstNumber + ' ln:' + lastNumber);
		total += parseInt(firstNumber * 10) + parseInt(lastNumber);
	}
	
	return(total);
}
function Day1Part2(input)
{
	input = input.replaceAll("oneight", "18");
	input = input.replaceAll("twone", "21");
	input = input.replaceAll("threeight", "38");
	input = input.replaceAll("fiveight", "58");
	input = input.replaceAll("sevenine", "79");
	input = input.replaceAll("nineight", "98");
	
	input = input.replaceAll("eightwo", "82");
	input = input.replaceAll("eighthree", "83");
	
	input = input.replaceAll("one", '1');
	input = input.replaceAll("two", '2');
	input = input.replaceAll("three", '3');
	input = input.replaceAll("four", '4');
	input = input.replaceAll("five", '5');
	input = input.replaceAll("six", '6');
	input = input.replaceAll("seven", '7');
	input = input.replaceAll("eight", '8');
	input = input.replaceAll("nine", '9');
	
    let firstNumber;
	let lastNumber;
	let total = 0;
	const inputSplit = input.split('\n');
	
	for(let x = 0; x < inputSplit.length; x++)
	{
		firstNumber = -1;
		lastNumber = -1;
		for(let y = 0; y < inputSplit[x].length; y++)
		{
			if(Number.isNaN(parseInt(inputSplit[x].charAt(y))) == false)
			{
				if(firstNumber == -1)
				{
					firstNumber = inputSplit[x].charAt(y);
					lastNumber = inputSplit[x].charAt(y);
				}
				else
				{
					lastNumber = inputSplit[x].charAt(y);
				}
			}
		}
		console.log('fn:' + firstNumber + ' ln:' + lastNumber);
		total += parseInt(firstNumber * 10) + parseInt(lastNumber);
	}
	
	return(total);
}