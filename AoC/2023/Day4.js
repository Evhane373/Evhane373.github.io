function Day4Part1(input)
{
	let total = 0;
	cardList = splitInput(input);
	for(let x = 0; x < cardList.length; x++)
	{
		let cardVal = checkCard(cardList[x].split(':')[1]);
		if(cardVal > 0)
		{
			total += 2 ** (cardVal - 1);
		}
	}
	return(total);
}

function Day4Part2(input)
{
	
}

function splitInput(input)
{
	input = input.split('\n');
	return(input);
}

function checkCard(numbers)
{
	let numMatch = 0;
	winNumbers = numbers.split('|')[0].trim().split(' ');
	pickNumbers = numbers.split('|')[1].trim().split(' ');
	
	for(let x = 0; x < winNumbers.length; x++)
	{
		for(let y = 0; y < pickNumbers.length; y++)
		{
			if(winNumbers[x] == pickNumbers[y])
			{
				numMatch++; 
			}
		}
	}
	return(numMatch);
}