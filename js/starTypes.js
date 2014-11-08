//var brownDwarf = 30;
//var low_mass = 100;
//var intermed_mass = 200;
//var high_mass = 350;
//var v_high_mass = 600;

var starTypes = {
	brownDwarf: {
		name: "Brown Dwarf",
		bio: "Congratulations! You made a brown dwarf. \n
		You didn’t accumulate enough mass to create a star, \n
		so instead your brown dwarf will cool and fade over time. \n
		It weighs between about 7 and 8% of the mass of the Sun."
	},

	lowMassStar: {
		name: "Low Mass Star",
		bio: "You made a low mass star! It weighs between 8 and 80% of \n
		the Sun’s mass and will live for about a trillion of years. Towards\n 
		the end of its life, it will fizzle into a White Dwarf. White dwarfs\n
		are dense stellar embers that cool over billions of years."

	},

	iMMassStar: {
		name: "Intermediate Mass Star",
		bio: "	You’ve created a Sun-like star! These stars have masses \n
		ranging from 0.8-8 times that of the Sun and have a lifetime of about\n
		10 billion years. At the end of their lifetime, these stars have used \n
		up their primary fuel source and explode, becoming Red Giants (large \n
		low-temperature stars) which cool further to become stellar remnants \n
        called White Dwarfs."
	},

	highMassStar: {
		name: "High Mass Star",
		bio: "Woah! That’s a big star! I’d say it’ll live for 10 million years. \n
		It is 8 to 20 times the mass of the Sun, and you know that the more \n
		massive a star, the shorter its lifespan will be. It’s so big that once \n
		it’s used up its primary energy source, it will expand into a Super Giant. \n
		The Super Giant will likely then explode in a Supernova and collapse into \n
		a Neutron star. Neutron stars are very small (not much bigger than Chicago!) \n
		and extremely dense."
	},

	vHighMassStar: {
		name: "Very High Mass Star"
		bio: "You made a big one! The highest-mass stars range from 20-100 times \n
		the mass of our Sun, and when they have used up their primary fuel source, \n
		they expand and become supergiant stars, which are larger than any other \n
		star and vary widely in temperature. These supergiants explode in a supernova\n 
		and can either become a new star (play again!) or a black hole (light can’t \n
		even escape this supermassive point!)."
	}

}

function checkStarType(diameter) {
	if (diameter <= 30) {
		$(".name").html(starTypes.brownDwarf.name);
		$(".description").html(starTypes.brownDwarf.bio);
	}
	else if (diameter > 30 && diameter <=100) {
		$(".name").html(starTypes.lowMassStar.name);
		$(".description").html(starTypes.lowMassStar.bio);
	}
	else if (diameter > 100 && diameter <=200) {
		$(".name").html(starTypes.iMMassStar.name);
		$(".description").html(starTypes.iMMassStar.bio);
	}
	else if (diameter > 200 && diameter <=350) {
		$(".name").html(starTypes.highMassStar.name);
		$(".description").html(starTypes.highMassStar.bio);
	}
	else if (diameter > 350 && diameter <=600) {
		$(".name").html(starTypes.vHighMassStar.name);
		$(".description").html(starTypes.vHighMassStar.bio);
	}
}





