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
		bio: "The first of the \"Gas Giants,\" Jupiter is a massive planet in the outer solar system that is composed of gas and has no solid surface. Jupiter's huge size creates a gravitational pull about 2.5 times that of Earth (24.8 m/s^2), which contributes to the many moons that Jupiter has caught in its gravitational field. The four main moons are named Io, Europa, Ganymede, and Callisto. Io is the closest to Jupiter and the most volcanically active body in our solar system!"
	},
	{
		name: "Jupiter's Moon Europa",
		gravity: 1.315,
		bio: "Jupiter's second-closest moon has a gravitational pull much smaller than Earth, about 1.3 m/s^2. Europa is believed to have a salty ocean covered in a thick ice layer and containing 2-3 times the volume of the water on Earth! Some scientists believe that life on Earth began in the depths of our oceans, where super-heated gases and nutrients from the center of the planet are released into the water. Do you think there could be life in Europa's oceans?"
	},
	{
		name: "Saturn",
		gravity: 10.44,
		bio: "Saturn is one silly looking planet! Although Saturn's rings looks solid, they are actually made of rock and ice, held together by Saturns' gravity, 10.4 m/s^2. All of the other gas giants in our solar system (Uranus, Neptune, and Jupiter) also have rings, but none as brilliant as Saturn's. Saturn is made of mostly hydrogen and helium, the same gases that are burning and being produced in our Sun! What do we use helium for here on Earth?"
	},
	{
		name: "Saturn's Moon Titan",
		gravity: 1.352,
		bio: "Titan is the largest of Saturn's over 60 moons. It has a gravity of only 1.35 m/s^2, meaning that you'd weigh a lot less on Titan than you do on Earth. There is a theory that there might be chemicals on Titan like ones on Earth that life evolved from. Do you think life could evolve on Titan?"
	},
	{
		name: "Uranus",
		gravity: 8.69,
		bio: "Uranus and Neptune are very close in size, Uranus producing a gravitational pull of 8.7 m/s^2. The poles of Uranus face directly towards and away from the Sun, leading scientists to believe that it was hit by a larger planet and knocked off-center by 90 degrees. Uranus' atmosphere is mainly methane, which gives the planet a blue tint. How do we know what elements are in Uranus' atmosphere?"
	},
	{
		name: "Neptune"
		gravity: 11.15,
		bio: "Neptune is the farthest planet away from the Sun. It has a surface gravity of 11.15 m/s^2. One year on Neptune takes the same amount of time as almost 165 years on Earth. How old are you in Neptune years?"
	},
	{
		name: "Pluto",
		gravity: 0.658,
		bio: "Pluto is 3 to 5 billion miles away from Earth and is about half the size of Mercury, the smallest planet in our solar system. It used to be considered a planet, but is now considered a Dwarf Planet. It has a surface gravity of only 0.66 m/s^2. That’s almost 1/15th of Earth’s 9.8 m/s^2 gravity! Pluto also orbits the sun on a different plane than the eight true planets. Do you think Pluto should be considered a planet?"
	}
]

var planetWeight = 0;

function checkGravity(planetIndex, catWeight) {
	planetWeight = gravityTypes[planetIndex].gravity * catWeight / 9.8;
	var roundedWeight = planetWeight.toFixed(2);
	$(".spaceWeight").html(roundedWeight);
	$(".description").html(gravityTypes[planetIndex].bio);
}
