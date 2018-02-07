//variable declarations
var $userName =$('#nameField');
var $squatField =$('#squatField');
var $squat1RMTable =$('#squat1RMTable');
var $squat2RMTable =$('#squat2RMTable');
var $benchField =$('#benchField');
var $bench1RMTable =$('#bench1RMTable');
var $bench2RMTable =$('#bench2RMTable');
var $deadliftField =$('#deadliftField');
var $deadlift1RMTable =$('#deadlift1RMTable');
var $deadlift2RMTable =$('#deadlift2RMTable');
var $total1RMTable =$('#total1RMTable');
var $total2RMTable =$('#total2RMTable');
var $nameDisplay =$('[data-user-display]');
var $subButton =$('[data-submit]');

//data model for storing goodies
var dataModel = {
  user: {
    name: "Blank"
  },

  reps1: [
  ],

  reps2: [
  ]  
};

//event declarations
$subButton.click(calc1RMs);
$subButton.click(calc2RMs);

//function calls
function calc1RMs(e) {
  e.preventDefault();

  //store the username
  dataModel.user.name = $userName.val();
  
  //create temporary new entry for this calculation
  var newEntry = {};
  newEntry.squat1 = squatCalc1RM();
  newEntry.bench1 = benchCalc1RM();
  newEntry.deadlift1 = deadliftCalc1RM();
  newEntry.total1 = totalCalc1RM();
  // newEntry.squat2 = squatCalc2RM(); // I bet you anything this ain't working
  // newEntry.bench2 = benchCalc2RM(); // I bet you anything this ain't working
  // newEntry.deadlift2 = deadliftCalc2RM(); // I bet you anything this ain't working
  // newEntry.total2 = totalCalc2RM(); // I bet you anything this ain't working

  //append this entry to the list (array) of reps in the model
  dataModel.reps1.push(newEntry);

  //inform the render it's services are needed
  render();
}
function calc2RMs(e) {
  e.preventDefault();

  // store the username
  // dataModel.user.name = $userName.val();
  
  //create temporary new entry for this calculation
  var newEntry = {};
  newEntry.squat2 = squatCalc2RM();
  newEntry.bench2 = benchCalc2RM();
  newEntry.deadlift2 = deadliftCalc2RM();
  newEntry.total2 = totalCalc2RM();
  
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
  $squat1RMTable.html(dataModel.reps1[0].squat1);  
  $bench1RMTable.html(dataModel.reps1[0].bench1);
  $deadlift1RMTable.html(dataModel.reps1[0].deadlift1);
  $total1RMTable.html(dataModel.reps1[0].total1);  
  $squat2RMTable.html(dataModel.reps2[0].squat2);  
  $bench2RMTable.html(dataModel.reps2[0].bench2);
  $deadlift2RMTable.html(dataModel.reps2[0].deadlift2);
  $total2RMTable.html(dataModel.reps2[0].total2);  

}

//capture the squat values (perform any mutations) and return them
function squatCalc1RM(e) {
  return $squatField.val();
}

function squatCalc2RM(e) {
  return $squatField.val(); //*0.92;
}

//capture the deadlift values (perform any mutations) and return them
function deadliftCalc1RM(e) {
  return $deadliftField.val();
}

function deadliftCalc2RM(e) {
  return $deadliftField.val(); // *0.92;
}

//capture the bench values (perform any mutations) and return them
function benchCalc1RM(e) {
  return $benchField.val();
}
function benchCalc2RM(e) {
  return $benchField.val(); // *0.92;
}

//capture the total values (perform any mutations) and return them
function totalCalc1RM(e) {
  var bench = $('#benchField').val();
  var squat =$('#squatField').val();
  var deadlift =$('#deadliftField').val();

  return parseInt(bench) + parseInt(squat) + parseInt(deadlift);
}

function totalCalc2RM(e) {
  var bench2 = $('#benchField').val();
  var squat2 =$('#squatField').val();
  var deadlift2 =$('#deadliftField').val();

  return (parseInt(bench2) + parseInt(squat2) + parseInt(deadlift2)) * 0.92;
}
