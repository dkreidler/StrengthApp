//variable declaration
var $userName = $('#nameField');
var $squatField = $('#squatField');
var $squat2RMTable = $('#squat2RMTable');
var $benchField = $('#benchField');
var $bench2RMTable =$('#bench2RMTable');
var $deadliftField = $('#deadliftField');
var $deadlift2RMTable =$('#deadlift2RMTable');
var $total2RMTable =$('#total2RMTable');
var $nameDisplay = $('[data-user-display]');
var $subButton = $('[data-submit]');

//data model for storing goodies
var dataModel = {
  user: {
    name: "Blank"
  },

  reps2: [
  ]
};

//event declarations
$subButton.click(calc2RMs);

//function calls
function calc2RMs(e) {
  e.preventDefault();

  //store the username
  dataModel.user.name = $userName.val();
  
  //create temporary new entry for this calculation
  var newEntry = {};
  newEntry.squat = squatCalc2RM();
  newEntry.bench = benchCalc2RM();
  newEntry.deadlift = deadliftCalc2RM();
  newEntry.total = totalCalc2RM();
  
  //append this entry to the list (array) of reps in the model
  dataModel.reps2.push(newEntry);

  //inform the render it's services are needed
  render();
}


//reads from the Model and updates the DOM
function render() {
  //user name
  $nameDisplay.html(dataModel.user.name);

  //squat and bench (and others)
  $squat2RMTable.html(dataModel.reps2[0].squat);  
  $bench2RMTable.html(dataModel.reps2[0].bench);
  $deadlift2RMTable.html(dataModel.reps2[0].deadlift);
  $total2RMTable.html(dataModel.reps2[0].total);  
  
}

//capture the squat values (perform any mutations) and return them

function squatCalc2RM(e) {
  return $squatField.val()*0.92;
}

//capture the deadlift values (perform any mutations) and return them

function deadliftCalc2RM(e) {
  return $deadliftField.val()*0.92;
}

//capture the bench values (perform any mutations) and return them

function benchCalc2RM(e) {
  return $benchField.val()*0.92;
}


//capture the total values (perform any mutations) and return them

function totalCalc2RM(e) {
  var bench = $('#benchField').val();
  var squat =$('#squatField').val();
  var deadlift =$('#deadliftField').val();

  return (parseInt(bench) + parseInt(squat) + parseInt(deadlift))*0.92;
}