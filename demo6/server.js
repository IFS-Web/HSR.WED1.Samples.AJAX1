const express = require('express');
const path = require('path');

const server = express();
server.use('/', express.static(path.join(__dirname, 'public')));

server.route('/api/music')
	.get(function(req, res, next) {
		res.json([
			{
				"artist": "ABBA",
				"title": "Thank you for the music"
			},
			{
				"artist": "Bob Dylan",
				"title": "Like a Rolling Stone"
			},
			{
				"artist": "The Rolling Stones",
				"title": "(I Can't Get No) Satisfaction"
			},
			{
				"artist": "John Lennon",
				"title": "Imagine"
			},
			{
				"artist": "Deep Purple",
				"title": "Smoke On The Water"
			},
			{
				"artist": "Aretha Franklin",
				"title": "Respect"
			},
			{
				"artist": "The Beach Boys",
				"title": null
			}
		]);
	});

server.listen(process.env.PORT || 3000);
console.log("Server started at http://localhost:3000/");
