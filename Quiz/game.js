if(jQuery){
	
	var checkAnswers = function(){
		var answerString = "";
		var answers = $(":checked");
		answers.each(function(i){
			answerString = answerString + answers[i].value;
		});
		$(":checked").each(function(i){
			var answerString = answerString + answers[i].value;
		});
		checkIfCorrect(answerString);
	};
	
	var checkIfCorrect = function(theString){
		if(parseInt(theString, 16) === 811124566973){
			$("body").addClass("correct");
			$("h1").text("You Win!");
			$("#question1").addClass("correct_color1");
			$("#question3").addClass("correct_color3");
			$("#question5").addClass("correct_color5");
			$("#question7").addClass("correct_color7");
			$("#question9").addClass("correct_color9");
			$("canvas").show();
		}
	};
	
	$("#question1").show();
};

if(impress){
	$("#question2").show();
};

if(atom){
	$("#question3").show();
};

if(createjs){
	$("#question4").show();
};

if(me){
	$("#question5").show();
};

if(require){
	$("#question6").show();
};

if($().playground){
	$("#question7").show();
};

if(jaws){
	$("#question8").show();
};

if(enchant){
	$("#question9").show();
};

if(Crafty){
	$("#question10").show();
};