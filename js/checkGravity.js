var gravityTypes = [
	{
		name: "Mercury",
		gravity: 3.7,
		bio: "Mercury is the closest planet to the Sun in the solar system. Its small size creates a small gravitational pull of 3.7 m/s^2--about a third that of Earth!--and its closeness to the Sun's heat and radiation has made it a dry, barren planet. Life needs a liquid, like water, to survive; is this a good location for a planet to support life?"

	},
	{
		name: "Venus",
		gravity: 8.87,
		bio: "Venus is our astronomical neighbor closer to the Sun. Approximately the same size as the Earth, Venus' gravity is 8.9 m/s^2, but the surface temperature and pressure are many times hotter than on Earth, like being in a pressure cooker! The upper clouds of Venus are cooler, and some scientists believe they could sustain life. What would an organism look like that lives in the clouds?"
    },
	{
		name: "Earth",
		gravity: 9.8,
		bio: "Your home planet! At the surface of the Earth, gravity pulls with a force of 9.8 m/s^2, making you weigh what you do. Earth is the only place in the Universe we currently know can sustain life. Where else do you think life could exist?"
	},
	{
		name: "Earth's Moon",
		gravity: 1.622,
		bio: "The Earth's moon is the largest object in our sky. It orbits the Earth at a distance of about 240,000 miles, the equivalent of going around the planet 15 times! The astronauts of the Apollo Missions experienced lunar gravity about 1/6 times that of Earth (1.6 m/s2)! How high could you jump if you weighed six times less than you do now?"
	},
	{
		name: "Mars",
		gravity: 3.711,
		bio: "Our other neighbor Mars has a surface gravity about 1/3 that of Earth (3.7 m/s^2), chilling temperatures, and full-planet dust storms. The red Martian soil is called \"regolith\" and gives Mars its name, the Red Planet. Martian rovers are collecting important scientific information on the regolith in search of signs of life. NASA and private space organizations are working towards sending humans to Mars for more research, the farthest any human has ever been! Would you go to Mars?"
	},
	{
		name: "Jupiter",
		gravity: 24.79,
		bio: ""
	},
	{
		name: "Jupiter's Moon Europa",
		gravity: 1.315,
		bio: ""
	},
	{
		name: "Saturn",
		gravity: 10.44,
		bio: ""
	},
	{
		name: "Saturn's Moon Titan",
		gravity: 1.352,
		bio: ""
	},
	{
		name: "Uranus",
		gravity: 8.69,
		bio: ""
	},
	{
		name: "Neptune",
		gravity: 11.15,
		bio: ""
	},
	{
		name: "Pluto",
		gravity: 0.658,
		bio: ""
	}
];

var planetWeight = 0;

function checkGravity(planetIndex, catWeight) {
	console.log(gravityTypes);
	console.log(gravityTypes[planetIndex]);
	planetWeight = gravityTypes[planetIndex].gravity * catWeight / 9.8;
	var roundedWeight = planetWeight.toFixed(2);
	$(".spaceWeight").html(roundedWeight);
	$(".description p").html(gravityTypes[planetIndex].bio);
}