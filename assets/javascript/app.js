var timer = 60;

function timerFunction() {
	setInterval(function() {
	timer--;
	if (timer === 0){
		alert("Times Up!");
		timer = 60;
	}
}, 1000);
	
setInterval(function() {
	$("#timer").text(timer);
}, 1000);
}
timerFunction();


