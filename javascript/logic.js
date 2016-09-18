// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4WjhqKPwd69y1DDIyunCAV5dcNwk22vM",
    authDomain: "train-scheduler-45f24.firebaseapp.com",
    databaseURL: "https://train-scheduler-45f24.firebaseio.com",
    storageBucket: "train-scheduler-45f24.appspot.com",
    messagingSenderId: "221186432720"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#addTrainBtn").on("click", function(){

  		var trainName = $("#trainInput").val().trim();
  		var destination = $("#destinationInput").val().trim();
  		var firstTrainTime = $("#firstTrainInput").val().trim();
  		var frequency = $("#frequencyInput").val().trim();

  		var newTrain = {
  			name: trainName,
  			destination: destination,
  			firstTrainTime: firstTrainTime,
  			frequency: frequency

  		}

  		database.ref().push(newTrain);

  		console.log(newTrain.name);
  		console.log(newTrain.destination);
  		console.log(newTrain.firstTrainTime);
  		console.log(newTrain.frequency);

  		alert("Train successfully added")

  		$("#trainInput").val("");
  		$("#destinationInput").val("");
  		$("#firstTrainInput").val("");
  		$("#frequencyInput").val("");

  		return false;

  });

    database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());


  		var trainName = childSnapshot.val().name;
  		var destination = childSnapshot.val().destination;
  		var firstTrainTime = childSnapshot.val().firstTrainTime;
  		var frequency = childSnapshot.val().frequency;

  		console.log(trainName);
  		console.log(destination);
  		console.log(firstTrainTime);
  		console.log(frequency);

  		//Prettify first Train Time
  		//var firstTrainTimePretty = moment.unix(firstTrainTime).format("")

  		//calculate next arrival
  		


  		//calculate minutues away

  		//Add each train's data into the table
  		$("#trainTable").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + firstTrainTime + "</td><td>" + frequency + "</td></tr>");



  });


