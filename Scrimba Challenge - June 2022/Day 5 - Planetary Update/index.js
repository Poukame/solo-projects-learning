const solarSystem = document.getElementById('solarSystem');
const planets = [
	{
		name: 'Mercury',
		diameter: 4879,
		color: 'grey',
	},
	{
		name: 'Venus',
		diameter: 12104,
		color: 'yellow',
	},
	{
		name: 'Earth',
		diameter: 12742,
		color: 'green',
	},
	{
		name: 'Mars',
		diameter: 6779,
		color: 'pink',
	},
	{
		name: 'Jupiter',
		diameter: 139822,
		color: 'yellow',
	},
	{
		name: 'Saturn',
		diameter: 116464,
		color: 'orange',
	},
	{
		name: 'Uranus',
		diameter: 50724,
		color: 'grey',
	},
	{
		name: 'Neptune',
		diameter: 49244,
		color: 'blue',
	},
	{
		name: 'Pluto',
		diameter: 2370,
		color: 'white',
	},
];

function renderPlanets(newSolar) {
	for (let i = 0; i < newSolar.length; i++) {
		const planet = document.createElement('div');
		planet.style.minHeight = `${newSolar[i].diameter / 1000}px`;
		planet.style.minWidth = `${newSolar[i].diameter / 1000}px`;
		planet.style.background = `conic-gradient( 
            black 0deg 180deg, 
            var(--${newSolar[i].color}) 180deg 360deg)`;
		planet.classList.add('planet');
		solarSystem.appendChild(planet);
	}
}

const moons = [
	{
		name: 'Mercury',
		moons: 0,
	},
	{
		name: 'Venus',
		moons: 0,
	},
	{
		name: 'Earth',
		moons: 1,
	},
	{
		name: 'Mars',
		moons: 2,
	},
	{
		name: 'Jupiter',
		moons: 67,
	},
	{
		name: 'Saturn',
		moons: 62,
	},
	{
		name: 'Uranus',
		moons: 27,
	},
	{
		name: 'Neptune',
		moons: 14,
	},
];

planets.pop();
planets.push({
	name: 'Codigus',
	diameter: 142424,
	color: 'green',
	moon: 42,
});

const newSolarSystem = planets.map((item, i) => Object.assign({}, item, moons[i]));

renderPlanets(newSolarSystem);
console.log(newSolarSystem);
