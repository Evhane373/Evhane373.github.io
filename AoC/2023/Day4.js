function Day4Part1(input)
{
	input = input.split('\n');
	let totalScore = 0;
	for(let x = 0; x < input.length; x++)
	{
		let card = input[x].split(':')[0];
		let cardScore = 0;
		let numbers = input[x].split(':')[1].trim();
		console.log(card + numbers);
		
		let wNumbers = numbers.split('|')[0].trim().split(' ');
		let yNumbers = numbers.split('|')[1].trim().split(' ');
		console.log(card + numbers + '\n' + wNumbers + '|' + yNumbers);
		for(let y = 0; y < wNumbers.length; y++)
		{
			for(let z = 0; z < yNumbers.length; z++)
			{
				if(parseInt(wNumbers[y]) == parseInt(yNumbers[z]))
				{
					if(cardScore == 0)
					{
						cardScore += 1;
					}
					else
					{
						cardScore *= 2;
					}
				}
			}
		}
		totalScore += cardScore;
		console.log(cardScore + '|' + totalScore);
	}
	return(totalScore);
}

function Day4Part2(input)
{
	return('Not yet');
}