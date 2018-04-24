// DOM manipulation
// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);

function sayHello () {
	var name = document.getElementById("name").value
	var message = "Hello " + name + "!"

	document.getElementById("content")
	.innerHTML = message;

	if (name === "Vedant") {
		var title =
		document.querySelector("#title")
		.textContent = "Vedant is Gay, but I'll say hello anyway!";

	}

	if (name === "Cameron") {
		var title =
		document.querySelector("#title")
		.textContent = "Akshar loves Cameron! Most beautiful girl ever!";

	}

	if (name === "Akshar") {
		var title =
		document.querySelector("#title")
		.textContent = "Akshar is amazing!";

	}

	if (name === "Marissa") {
		var title =
		document.querySelector("#title")
		.textContent = "Marissa is so ugly. Vedant doesn't have a chance with her!";

	}

	if (name === "Gus") {
		var title =
		document.querySelector("#title")
		.textContent = "Stupid Ass Faggot, who always does whatever Kyle says even if Kyle does dumb things! No matter how nice Akshar is to him, he always goes back to Kyle!";

	}

	if (name === "Kyle") {
		var title =
		document.querySelector("#title")
		.textContent = "One word: Faggot!";

	}
}
