function sayHello() { 
    var name = prompt("What's your name?");
    alert("Hi " + name + ", pleasure to meet you!");
}

function calculator() {
    var firstNumber = prompt("Please provide the first number"); 
    var secondNumber = prompt("Please provide the second number"); 
    alert(Number(firstNumber) + Number(secondNumber));
}

function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}