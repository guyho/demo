function addUser() {
    var newUser = {
        'name': $('#addUser fieldset input#name').val(),
        'score': $('#addUser fieldset input#score').val(),
        'ontime': $('#addUser fieldset input#ontime').val(),
        'total': $('#addUser fieldset input#total').val(),
    }
    console.log("Adding new user:", newUser);

    // Clear the form inputs
    $('#addUser fieldset input').val(' ');

    // TODO send a request to the nodejs web server
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "processData": false,
        data: JSON.stringify(newUser)
    };
	

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
	
	alert("Added user successfuly");
};

function info() {

    var cUser = {
        'cname': $('#readUser fieldset input#cname').val(),
    }
    
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
  },
  "processData": false,
  "data": JSON.stringify(cUser)
  }

$.ajax(settings).done(function (response) {
  console.log(response);
});

};