function Day5Part1(input)
{
	let seeds = getSeeds(input);
	console.log(seeds);
}

function Day5Part2(input)
{
	
}

function getSeeds(input)
{
	let inputSplit = input.split('\n');
	let seeds = inputSplit[0].split(':')[1].trim().split(' ');
	return(seeds);
}