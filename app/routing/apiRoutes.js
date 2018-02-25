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

	// Search for Specific Character (or all characters) - provides JSON
	// app.get("/api/:friends?", function(req, res) {
	//   var chosen = req.params.friends;

	//   if (chosen) {
	//     console.log(chosen);

	//     for (var i = 0; i < friends.length; i++) {
	//       if (chosen === friends[i].routeName) {
	//         return res.json(friends[i]);
	//       }
	//     }
	//     return res.json(false);
	//   }
	//   return res.json(friends);
	// });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

}