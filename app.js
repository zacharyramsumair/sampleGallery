// require("dotenv").config();
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");

let MobileData = require("./public/javascripts/MobileData");
let DesktopData = require("./public/javascripts/DesktopData");
// let { MobileData, DesktopData } = require("./public/javascripts/data");

// // Requiring routes
// var commentRoutes = require("./routes/comments"),
//   campgroundRoutes = require("./routes/campgrounds"),
//   indexRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

// console.log(MobileData);

//landing page
app.get("/", function (req, res) {
	res.render("index", { MobileData, DesktopData });
});

//slideshow page
app.get("/slideshow", function (req, res) {
	res.render("slideshow", { MobileData });
});

app.get("/test", function (req, res) {
	res.render("test");
	// res.render("index", { MobileData });
});

//slideshow page

app.get("*", function (req, res) {
	res.send("error");
});

app.listen(process.env.PORT || 3000, function () {
	console.log("listening on http://localhost:3000/");
});
