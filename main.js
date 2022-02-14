let numClicked1 = 0;

function circle1Clicked() {
	const circle1Text = document.getElementById("text1");
	numClicked1+=1;
	circle1Text.textContent = numClicked1;
}

function circle2Hover() {
	const circle2 = document.getElementById("circle2");
	circle2.style.stroke = "black";
	circle2.style.strokeWidth = 3;
}

function circle2Out() {
	const circle2 = document.getElementById("circle2");
	circle2.style.stroke = null;
}

function circle3Hide() {
	const circle3 = document.getElementById("circle3");
	if (circle3.style.opacity === "0") {
		circle3.style.opacity = 1;
	} else {
		circle3.style.opacity = 0;
	}
}