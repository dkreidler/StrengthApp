//variable declaration
var $userName = $('#nameField');
var $squatField = $('#squatField');
var $squat1RMTable = $('#squat1RMTable');
var $benchField = $('#benchField');
var $bench1RMTable =$('#bench1RMTable');
var $deadliftField = $('#deadliftField');
var $deadlift1RMTable =$('#deadlift1RMTable');
var $total1RMTable =$('#total1RMTable');
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

}

//capture the values (perform any mutations) and return them
function squatCalc1RM(e) {
  return $squatField.val();
}

//capture the values (perform any mutations) and return them
function benchCalc1RM(e) {
  return $benchField.val();
}

//capture the values (perform any mutations) and return them
function deadliftCalc1RM(e) {
  return $deadliftField.val();
}

//capture the values (perform any mutations) and return them
function totalCalc1RM(e) {
  var bench = $('#benchField').val();
  var squat =$('#squatField').val();
  var deadlift =$('#deadliftField').val();

  return parseInt(bench) + parseInt(squat) + parseInt(deadlift);
}