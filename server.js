const path = require("path");
const express = require("express");
const app = express();

// Serve static files....
app.use(express.static(__dirname + "/dist/seasons-best"));

// Send all requests to index.html
app.get("/*", function (req, res) {
res.sendFile(path.join(__dirname, "dist/seasons-best/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);