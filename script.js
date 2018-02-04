//variable declaration
var $userName = $('#nameField');
var $squatField = $('#squatField');
var $squat1RMTable = $('#squat1RMTable');
// var $squat2RMTable = $('#squat2RMTable');
var $benchField = $('#benchField');
var $bench1RMTable =$('#bench1RMTable');
// var $bench2RMTable =$('#bench2RMTable');
var $deadliftField = $('#deadliftField');
var $deadlift1RMTable =$('#deadlift1RMTable');
// var $deadlift2RMTable =$('#deadlift2RMTable');
var $total1RMTable =$('#total1RMTable');
// var $total2RMTable =$('#total2RMTable');
var $nameDisplay = $('[data-user-display]');
var $subButton = $('[data-submit]');

//data model for storing goodies
var dataModel = {
  user: {
    name: "Blank"
  },

  reps: [
  ]
};

//event declarations
$subButton.click(calc1RMs);

//function calls
function calc1RMs(e) {
  e.preventDefault();

  //store the username
  dataModel.user.name = $userName.val();
  
  //create temporary new entry for this calculation
  var newEntry = {};
  newEntry.squat = squatCalc1RM();
  newEntry.bench = benchCalc1RM();
  newEntry.deadlift = deadliftCalc1RM();
  newEntry.total = totalCalc1RM();
  // newEntry.squat2 = squatCalc2RM(); // I bet you anything this ain't working
  // newEntry.bench2 = benchCalc2RM(); // I bet you anything this ain't working
  // newEntry.deadlift2 = deadliftCalc2RM(); // I bet you anything this ain't working
  // newEntry.total2 = totalCalc2RM(); // I bet you anything this ain't working

  //append this entry to the list (array) of reps in the model
  dataModel.reps.push(newEntry);

  //inform the render it's services are needed
  render();
}


//reads from the Model and updates the DOM
function render() {
  //user name
  $nameDisplay.html(dataModel.user.name);

  //squat and bench (and others)
  $squat1RMTable.html(dataModel.reps[0].squat);  
  $bench1RMTable.html(dataModel.reps[0].bench);
  $deadlift1RMTable.html(dataModel.reps[0].deadlift);
  $total1RMTable.html(dataModel.reps[0].total);  
  // $squat2RMTable.html(dataModel.reps[1].squat);  
  // $bench2RMTable.html(dataModel.reps[1].bench);
  // $deadlift2RMTable.html(dataModel.reps[1].deadlift);
  // $total2RMTable.html(dataModel.reps[1].total);  

}

//capture the squat values (perform any mutations) and return them
function squatCalc1RM(e) {
  return $squatField.val();
}

//capture the deadlift values (perform any mutations) and return them
function deadliftCalc1RM(e) {
  return $deadliftField.val();
}

//capture the bench values (perform any mutations) and return them
function benchCalc1RM(e) {
  return $benchField.val();
}

//capture the total values (perform any mutations) and return them
function totalCalc1RM(e) {
  var bench = $('#benchField').val();
  var squat =$('#squatField').val();
  var deadlift =$('#deadliftField').val();

  return parseInt(bench) + parseInt(squat) + parseInt(deadlift);
}
