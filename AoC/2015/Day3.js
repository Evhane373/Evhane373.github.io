function Day3Part1(input)
{
	let location = [0, 0];
	let visited = [];
	let houses = 1;
	for(let x = 0; x < input.length; x++)
	{
		if(input.charAt(x) == "^")
		{
			location[0]++;
		}
		else if(input.charAt(x) == "v")
		{
			location[0]--;
		}
		else if(input.charAt(x) == "<")
		{
			location[1]--;
		}
		else if(input.charAt(x) == ">")
		{
			location[1]++;
		}
		
		let newHouse = true;
		
		for(let y = 0; y < visited.length; y++)
		{
			if((location[0].toString + location[1].toString) == visited[y])
			{
				newHouse = false;
			}
			console.log(location.toString() + " " +  visited[y].toString());
		}
		
		if(newHouse == true)
		{
			houses++;
		}
		visited.push(location[0].toString + location[1].toString);
		//console.log(location + "-" + visited[x] + "(" + houses + ")");
	}
	return houses;
}
function Day3Part2(input)
{
	
}