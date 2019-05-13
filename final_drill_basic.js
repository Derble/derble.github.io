
function getReceipt() {
	var text1 = "<h4>You Ordered:</h4>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(runningTotal);
	getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};

function getMeat(runningTotal, text1) {
	var meatTotal = 0;
	var meatArray = document.getElementsByClassName("meats");
	
	for (var i = 0; i < meatArray.length;i++) {
		if (meatArray[i].checked) {
			var selectedMeat =meatArray[i].value;
			text1 = text1+selectedMeat+"<br>";
			meatTotal = meatTotal + 1;//more succinct code, adds 1 to meat total
		}
	}
	/*
	for (var j = 0; meatArray[j]; j++) {
		if (meatArray[j].checked) {
			meatTotal = meatTotal + 1;
		}
	}*/

	if (meatTotal > 0) { 
		meatTotal = meatTotal-1;//if meat is chosen, removes one from total since the first meat is complimentary
	}
	
	runningTotal = runningTotal + meatTotal;
	console.log(runningTotal);
	getCheese(runningTotal, text1);
}

function getCheese(runningTotal, text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
			text1 = text1 + selectedCheese + "<br>";
		}
	}
	if (selectedCheese === "Regular") {
		cheeseTotal = 0;
	} else if (selectedCheese === "None") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra") {
		cheeseTotal = 3;
	} 
	runningTotal = runningTotal + cheeseTotal;
	console.log(runningTotal);//to test that the total is increasing
	getCrust(runningTotal,text1);
}

function getCrust(runningTotal, text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1 + selectedCrust + "<br>";
		}
	}
	if (selectedCrust === "Plain") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed") {
		crustTotal = 3;
	} else if (selectedCrust === "Spicy") {
		crustTotal = 0;
	} else if (selectedCrust === "House Special") {
		crustTotal = 0;
	}
	runningTotal = runningTotal + crustTotal;
	console.log(runningTotal);//to test that the total is increasing
	getSauce(runningTotal,text1);
}

function getSauce(runningTotal, text1) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	if (selectedSauce === "Marinara") {
		sauceTotal = 0;
	} else if (selectedSauce === "White") {
		sauceTotal = 0;
	} else if (selectedSauce === "Barbeque") {
		sauceTotal = 0;
	} else if (selectedSauce === "None") {
		sauceTotal = 0;
	}
	runningTotal = runningTotal + sauceTotal;
	console.log(runningTotal);
	getVeggies(runningTotal,text1);
}

function getVeggies(runningTotal, text1) {
	var veggieTotal = 0;
	var veggieArray = document.getElementsByClassName("veggies");
	
	for (var i = 0; i < veggieArray.length;i++) {
		if (veggieArray[i].checked) {
			var selectedVeggies = veggieArray[i].value;
			text1 = text1+selectedVeggies+"<br>";//adds the text for the veggie into the string
			veggieTotal = veggieTotal + 1;
		}//since this if statement only looks at the checked items, we can then increase the veggie count by 1
	}

	if (veggieTotal > 0) { 
		veggieTotal = veggieTotal-1;//if meat is chosen, removes one from total since the first meat is complimentary
	}
	
	runningTotal = runningTotal + veggieTotal;
	console.log(runningTotal);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h4>Total: <strong>$"+runningTotal+".00"+"</strong></h4>";
}

//console.log(selectedSize+" = $"+sizeTotal+".00");
//console.log("size text1: "+text1);
//console.log("subtotal: $"+runningTotal+".00");