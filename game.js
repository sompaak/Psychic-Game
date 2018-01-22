var wins = 0;
var losses = 0; 
var guesses = 9;
var options;
var random;
var chosen; 
var picked;

var options = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function randomize(){

	random = options[Math.floor(Math.random() * 26)];
	console.log (random);
}

randomize();

document.onkeyup = function(event){
	chosen = event.key;
	
	

	if ( chosen === random)
	{
		wins++;
		randomize();
	}
	
	else 
	{
		guesses--;		
		picked=picked + chosen +",";
	}

	if ( guesses === 0)
	    {
	    	losses ++;
	        guesses = 9;
	    	picked = null;
	    	
	    } 

	

	document.querySelector("#Wins").innerHTML = wins;
	document.querySelector("#Losses").innerHTML = losses;
	document.querySelector("#guesses").innerHTML = guesses;
	document.querySelector("#used").innerHTML = picked;
}
