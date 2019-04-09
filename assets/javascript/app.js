//var myQuestions = [
//	question: "How many championships have the celtics won?"
//	answers: {
//		a: 10
//		b: 11
//		c: 17
//		d: 15
//	}
//	question : "How many rings does Bill Russell have (alone as a player, not coach)?"
//	answers: {
//		a: 9
//		b: 11
//		c: 10
//		d: 13
//	}
//	question:
//	answers: {
//		a: "Kobe Bryant, Shaquille O'Neal, Pau Gasol,  "
//		b: ""
//		c: ""
//		d: ""
//	}
//];


$(document).ready(function(){
	$("button").click(function(){
		$("button").hide();
		$(".display-4").replaceWith("<h1>How Many Championships have the celtics won?");
		$(".lead").replaceWith("<h1>How Many Championships have the celtics won?");
	});
});