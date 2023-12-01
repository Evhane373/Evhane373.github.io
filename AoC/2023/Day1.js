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