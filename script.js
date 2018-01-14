//function getUserName() {
//var nameField = document.getElementById('nameField').value;
//var result = document.getElementById('result');
 //   result.textContent = 'Your username is: ' + nameField;
 //alert(nameField);
//}
//}
// var subButton = document.getElementById('subButton');
// subButton.addEventListener('click', getUserName, false);
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', calc1RM, false);

function calc1RM() {
  // var nameField = document.getElementById('nameField').value;
  var userName = document.getElementbyId('nameField').value;
  var squatField = document.getElementById('squatField').value;
  var deadliftField = document.getElementById('deadliftField').value;
  var benchField = document.getElementById('benchField').value;
  var squatResult = document.getElementById('squatResult');
  var squat1RMTable = document.getElementById('squat1RMTable');
  var deadlift1RMTable = document.getElementById('deadlift1RMTable');
  var bench1RMTable = document.getElementById('bench1RMTable');
  var total1RMTable = document.getElementById('total1RMTable');
  if(benchField != 0 && squatField != 0 && deadliftField != 0) {
	squatResult.textContent = 'Your calculated 1RM is ' + parseInt(squatField) * 3;
  squat1RMTable.textContent = parseInt(squatField) * 3;
  deadlift1RMTable.textContent = parseInt(deadliftField) * 3;
  bench1RMTable.textContent = parseInt(benchField) * 3;
  total1RMTable.textContent = ((parseInt(squatField) + parseInt(deadliftField) + parseInt(benchField)) * 3) ;
		} else {
			squatResult.textContent = "We're glad you're here. Keep working. It'll pay off."
		}
  };