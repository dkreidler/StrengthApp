//variable declarations
var $userName =$('#nameField');
var $squatField =$('#squatField');
var $squat1RMTable =$('#squat1RMTable');
var $benchField =$('#benchField');
var $bench1RMTable =$('#bench1RMTable');
var $deadliftField =$('#deadliftField');
var $deadlift1RMTable =$('#deadlift1RMTable');
var $total1RMTable =$('#total1RMTable');
var $nameDisplay =$('[data-user-display]');
var $subButton =$('[data-submit]');
var $squat2RMTable =$('#squat2RMTable');
var $bench2RMTable =$('#bench2RMTable');
var $deadlift2RMTable =$('#deadlift2RMTable');
var $total2RMTable =$('#total2RMTable');
var $squat3RMTable =$('#squat3RMTable');
var $bench3RMTable =$('#bench3RMTable');
var $deadlift3RMTable =$('#deadlift3RMTable');
var $total3RMTable =$('#total3RMTable');
var $squat5RMTable =$('#squat5RMTable');
var $bench5RMTable =$('#bench5RMTable');
var $deadlift5RMTable =$('#deadlift5RMTable');
var $total5RMTable =$('#total5RMTable');
var $squat8RMTable =$('#squat8RMTable');
var $bench8RMTable =$('#bench8RMTable');
var $deadlift8RMTable =$('#deadlift8RMTable');
var $total8RMTable =$('#total8RMTable');

//data model for storing goodies
var dataModel = {
  user: {
    name: "Blank"
  },

  reps1: [
  ],

  reps2: [
  ],  

  reps3: [
  ],

  reps5: [

  ],

  reps8: [

  ]


};

//event declarations
$subButton.click(calc1RMs);
$subButton.click(calc2RMs);
$subButton.click(calc3RMs);
$subButton.click(calc5RMs);
$subButton.click(calc8RMs);

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
  
  // append this entry to the list (array) of reps in the model
  dataModel.reps1.push(newEntry);

  // inform the render it's services are needed
  // render();
}

function calc2RMs(e) {
  e.preventDefault();

  //create temporary new entry for this calculation
  var newEntry = {};
  newEntry.squat2 = squatCalc2RM();
  newEntry.bench2 = benchCalc2RM();
  newEntry.deadlift2 = deadliftCalc2RM();
  newEntry.total2 = totalCalc2RM();
  
  //append this entry to the list (array) of reps in the model
  dataModel.reps2.push(newEntry);

  //inform the render it's services are needed
//  render();
}
function calc3RMs(e) {
  e.preventDefault();

  // create temporary new entry for this calculation
  var newEntry = {};
  newEntry.squat3 = squatCalc3RM();
  newEntry.bench3 = benchCalc3RM();
  newEntry.deadlift3 = deadliftCalc3RM();
  newEntry.total3 = totalCalc3RM();
  
  // append this entry to the list (array) of reps in the model
  dataModel.reps3.push(newEntry);

  // inform the render it's services are needed
  // render();
}
function calc5RMs(e) {
  e.preventDefault();

  //create temporary new entry for this calculation
  var newEntry = {};
  newEntry.squat5 = squatCalc5RM();
  newEntry.bench5 = benchCalc5RM();
  newEntry.deadlift5 = deadliftCalc5RM();
  newEntry.total5 = totalCalc5RM();
  
  //append this entry to the list (array) of reps in the model
  dataModel.reps5.push(newEntry);

  //inform the render it's services are needed
  //render();
}
function calc8RMs(e) {
  e.preventDefault();

  //create temporary new entry for this calculation
  var newEntry = {};
  newEntry.squat8 = squatCalc8RM();
  newEntry.bench8 = benchCalc8RM();
  newEntry.deadlift8 = deadliftCalc8RM();
  newEntry.total8 = totalCalc8RM();
  
  //append this entry to the list (array) of reps in the model
  dataModel.reps8.push(newEntry);

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
  $squat3RMTable.html(dataModel.reps3[0].squat3);  
  $bench3RMTable.html(dataModel.reps3[0].bench3);
  $deadlift3RMTable.html(dataModel.reps3[0].deadlift3);
  $total3RMTable.html(dataModel.reps3[0].total3);  
  $squat5RMTable.html(dataModel.reps5[0].squat5);  
  $bench5RMTable.html(dataModel.reps5[0].bench5);
  $deadlift5RMTable.html(dataModel.reps5[0].deadlift5);
  $total5RMTable.html(dataModel.reps5[0].total5);  
  $squat8RMTable.html(dataModel.reps8[0].squat8);  
  $bench8RMTable.html(dataModel.reps8[0].bench8);
  $deadlift8RMTable.html(dataModel.reps8[0].deadlift8);
  $total8RMTable.html(dataModel.reps8[0].total8);  

}

//capture the squat values (perform any mutations) and return them
function squatCalc1RM(e) {
  return $squatField.val();
}

function squatCalc2RM(e) {
  var squat2RM =$('#squatField').val();
  return round5(parseInt(squat2RM) * 0.95);
}

function squatCalc3RM(e) {
  var squat3RM =$('#squatField').val();
  return round5(parseInt(squat3RM) * 0.92);
}

function squatCalc5RM(e) {
  var squat5RM =$('#squatField').val();
  return round5(parseInt(squat5RM) * 0.88);
}

function squatCalc8RM(e) {
  var squat8RM =$('#squatField').val();
  return round5(parseInt(squat8RM) * 0.75);
}

//capture the deadlift values (perform any mutations) and return them
function deadliftCalc1RM(e) {
  return $deadliftField.val();
}

function deadliftCalc2RM(e) {
  var deadlift2RM =$('#deadliftField').val();
  return round5(parseInt(deadlift2RM) * 0.95);
}
function deadliftCalc3RM(e) {
  var deadlift3RM =$('#deadliftField').val();
  return round5(parseInt(deadlift3RM) * 0.92);
}
function deadliftCalc5RM(e) {
  var deadlift5RM =$('#deadliftField').val();
  return round5(parseInt(deadlift5RM) * 0.88);
}
function deadliftCalc8RM(e) {
  var deadlift8RM =$('#deadliftField').val();
  return round5(parseInt(deadlift8RM) * 0.75);
}

//capture the bench values (perform any mutations) and return them
function benchCalc1RM(e) {
  return $benchField.val();
}
function benchCalc2RM(e) {
  var bench2RM =$('#benchField').val();
  return round5(parseInt(bench2RM) * 0.95);
}

function benchCalc3RM(e) {
  var bench3RM =$('#benchField').val();
  return round5(parseInt(bench3RM) * 0.92);
}

function benchCalc5RM(e) {
  var bench5RM =$('#benchField').val();
  return round5(parseInt(bench5RM) * 0.88);
}

function benchCalc8RM(e) {
  var bench8RM =$('#benchField').val();
  return round5(parseInt(bench8RM) * 0.75);
}

//capture the total values (perform any mutations) and return them
function totalCalc1RM(e) {
  var bench = $('#benchField').val();
  var squat =$('#squatField').val();
  var deadlift =$('#deadliftField').val();

  return round5(parseInt(bench) + parseInt(squat) + parseInt(deadlift));
}

function totalCalc2RM(e) {
  var bench2 = $('#benchField').val();
  var squat2 =$('#squatField').val();
  var deadlift2 =$('#deadliftField').val();

  return round5((parseInt(bench2) + parseInt(squat2) + parseInt(deadlift2)) * 0.95);
}
function totalCalc3RM(e) {
  var bench3 = $('#benchField').val();
  var squat3 =$('#squatField').val();
  var deadlift3 =$('#deadliftField').val();

  return round5((parseInt(bench3) + parseInt(squat3) + parseInt(deadlift3)) * 0.92);
}
function totalCalc5RM(e) {
  var bench5 = $('#benchField').val();
  var squat5 =$('#squatField').val();
  var deadlift5 =$('#deadliftField').val();

  return round5((parseInt(bench5) + parseInt(squat5) + parseInt(deadlift5)) * 0.88);
}
function totalCalc8RM(e) {
  var bench8 = $('#benchField').val();
  var squat8 =$('#squatField').val();
  var deadlift8 =$('#deadliftField').val();

  return round5((parseInt(bench8) + parseInt(squat8) + parseInt(deadlift8)) * 0.75);
}

function round5(weight)
{
    return (weight % 5) >= 2.5 ? parseInt(weight / 5) * 5 + 5 : parseInt(weight / 5) * 5;
}
