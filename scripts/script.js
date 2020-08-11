

/* ============================================= */
/* Author: LUIGI PISANO
/* Date: var yesterday = new Date(new Date().setDate(new Date().getDate()-1));
/* ============================================= */


// ==============BACK TO TOP BUTTON============
const upArrow = document.querySelector("#upArrow");

upArrow.addEventListener("click", function() {
	window.scrollTo(0, 0);
});

// ==============STYLE BUTTON ==============

var colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener ("click", function() {
let x = Math.floor(Math.random() * 4);
document.getElementById("colorTheme").setAttribute("href","styleSheets/style_" + x + ".css");
});


