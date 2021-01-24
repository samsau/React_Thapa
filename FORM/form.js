var Fname = /^[a-zA-Z ]+$/;
var Femail = /^[a-zA-Z_0-9]{3,12}@[a-zA-Z]{3,6}\.[a-zA-Z]{3,}$/;
var Fpass = /^[a-z]/;

// it is jquery.

// id's : name, email, Pass, cPass, DOB

$(document).ready(function () {
	$("#name").on("input", function () {
		var name1 = $("#name").val();
		var name2 = Fname.test(name1);
		if (name2) {
			$("#span1").css("display", "none");
		} else {
			$("#span1").css("display", "block");
		}
	});
});

$(document).ready(function () {
	$("#email").on("input", function () {
		var name1 = $("#email").val();
		var name2 = Femail.test(name1);
		if (name2) {
			$("#span2").css("display", "none");
		} else {
			$("#span2").css("display", "block");
		}
	});
});

$(document).ready(function () {
	$("#Pass").on("input", function () {
		var name1 = $("#Pass").val();
		var name2 = Fpass.test(name1);
		if (name2) {
			$("#span3").css("display", "none");
		} else {
			$("#span3").css("display", "block");
		}
	});
});

$(document).ready(function () {
	$("#cPass").on("input", function () {
		var name1 = $("#cPass").val();
		var name2 = Fpass.test(name1);
		if (name2) {
			$("#span4").css("display", "none");
		} else {
			$("#span4").css("display", "block");
		}
	});
});
$(document).ready(function () {
	$("#cPass").on("input", function () {
		var name1 = $("#Pass").val();
		var name2 = $("#cPass").val();

		if (name2 === name1) {
			$("#span5").css("display", "none");
		} else {
			$("#span5").css("display", "block");
		}
	});
});
