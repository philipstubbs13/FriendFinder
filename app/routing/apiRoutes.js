// LOAD DATA
// We are linking our routes to a "data" source.
// This data source holds an array of information on friend compatibility data.
var friendsData = require("../data/friends.js");


// ROUTING
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to a Javascript array.
  // (ex. User fills out a survey... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/new", function(req, res) {
    // Note the code here. Our "server" will respond to requests.
    // req.body is available since we're using the body-parser middleware
	// req.body hosts is equal to the JSON post sent from the user
	// This works because of our body-parser middleware
	var newuser = req.body;
	// Using a RegEx Pattern to remove spaces from newCharacter
	// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
	//newuser.routeName = newuser.name.replace(/\s+/g, "").toLowerCase();
	
	console.log(newuser);

	friendsData.push(newuser);

	res.json(newuser);
  });
}