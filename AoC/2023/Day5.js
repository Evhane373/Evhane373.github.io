function Day4Part1(input)
{
	let seeds = getSeeds(input);
	console.log(seeds);
}

function Day4Part2(input)
{
	
}

function getSeeds(input)
{
	let inputSplit = input.split('\n');
	let seeds = inputSplit[0].split(':')[1].split(' ');
	return(seeds);
}