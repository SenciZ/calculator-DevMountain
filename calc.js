const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);
	
	switch(mathSymbol){
		case "-":
			if(!num3){console.log(num1-num2)} else {console.log(num1-num2-num3);}
			break;

		case "+":
			if(!num3){console.log(num1+num2)} else {console.log(num1+num2+num3);}
			break;
					
		case "/":
			if(!num3){console.log(num1/num2)} else {console.log(num1/num2/num3);}
			break;
					
		case "*":
			if(!num3){console.log(num1*num2)} else {console.log(num1*num2*num3);}
			break;

		case "^":
			console.log(Math.sqrt(num1));
			break;
	}
	// Calculator
	// This line closes the connection to the command line interface.
	reader.close()

});
