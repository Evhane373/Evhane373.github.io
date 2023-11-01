function Day1Part1(input) {
	let len = input.length;
	console.log(len);
	let num = 0;
	
	for(let x = 0; x < len; x++)
	{
		if(input.charAt(x) == '(')
		{
			num += 1;
			console.log("+1");
		}
		else if(input.charAt(x) == ')')
		{
			num -= 1;
			console.log("-1");
		}
	}
	return num;
}
function Day1Part2(input)
{
   let len = input.length;
	console.log(len);
	let num = 0;
	
	for(let x = 0; x < len; x++)
	{
		if(input.charAt(x) == '(')
		{
			num += 1;
			console.log("+1");
		}
		else if(input.charAt(x) == ')')
		{
			num -= 1;
			console.log("-1");
		}
      if(num == -1)
      {
         return(x)
      }
	}
	window.alert(num)
	return num;
}