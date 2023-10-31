function AoC2015D1() {
	let input = document.getElementById("inp").value;
	let len = input.length;
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
			console.log("+1");
		}
	}
	window.alert(num)
	return num;
}