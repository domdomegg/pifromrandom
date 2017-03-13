function calcPi() {
    // Get our elements
    var resultsContainer = document.getElementById('results');
    var n = document.getElementById('n').value;
    var randMax = document.getElementById('randMax').value;

    // Show placeholder text
    resultsContainer.innerHTML = "<h2>Calculating...</h2>";

    // Initialise variables
    var cofactors = 0;
    var coprimes = 0;

    // Repeat n times
    for(var i = 0; i < n; i++) {
        // Get two random numbers between 1 and randMax
        var random1 = Math.floor(Math.random() * randMax) + 1;
        var random2 = Math.floor(Math.random() * randMax) + 1;

        // Check if they are coprime
        if(gcd(random1, random2) == 1) {
            coprimes++;
        } else {
            cofactors++;
        }
    }

    // Calculate pi
    var piValue = Math.sqrt(6 / (coprimes/n));

    // There's a fancy way of creating elements but I'm lazy.
    resultsContainer.innerHTML =
        "<h2>Results</h2>" +
        "<p class='lead'>Out of " + n + " numbers, " + coprimes + " were coprime (" + (Math.round((coprimes/n)*1000)/10) + "%) and " + cofactors + " were cofactors (" + (Math.round((cofactors/n)*1000)/10) + "%)." +
        "<p class='lead'>" + (Math.round((coprimes/n)*100)/100) + " = <img src='6overpisquared.png' height='48px'> ⇒ π ≈ " + piValue +
        "<p class='lead'>That's " + (Math.round((((piValue / Math.PI)-1)*100000))/1000) + "% off π's actual value</p>";
}

// Recursive method for finding the greatest common denominator
function gcd(a, b) {
	while (b !== 0) {
		var z = a % b;
		a = b;
		b = z;
	}
	return a;
}
