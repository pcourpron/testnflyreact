const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const email = require("./api/email");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

// Define API routes here
app.use(email);
// Send every other request to the React app

app.get("*", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
