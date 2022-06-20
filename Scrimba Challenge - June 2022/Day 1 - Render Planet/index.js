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
];

// find the largest planet for scaling purpose in case they decide to change size :D,
// or if we wanted to scale to the entire universe, because why not?
const largestPlanet = planets.reduce((acc, cur) => (acc < cur.diameter ? (acc = cur.diameter) : acc), 0);

// this value (in Pixels) can be changed to make the planets bigger or smaller
const toollineSizeinPixels = 200;

planets.map((planet) => {
    const planetSize = `${(planet.diameter * toollineSizeinPixels) / largestPlanet}`;

    const amazingPlanet = document.createElement('div');

    amazingPlanet.className = `planet ${planet.name}`;
    amazingPlanet.style.width = `${planetSize}px`;
    amazingPlanet.style.height = `${planetSize}px`;
    amazingPlanet.style.borderRadius = `${planetSize}px`;
    amazingPlanet.style.background = `conic-gradient( black 0deg 180deg, ${planet.color} 180deg 360deg`;
    amazingPlanet.style.position = 'relative';
    solarSystem.appendChild(amazingPlanet);

    const allPlanets = document.querySelector(`.${planet.name}`);
    allPlanets.onmouseover = tooltip;
    allPlanets.onmouseout = removeTooltip;
    return allPlanets;
});

function tooltip(amazingPlanet) {
    const planetName = amazingPlanet.srcElement.classList[1];
    const planetData = planets.find(({ name }) => name === `${planetName}`);
    const targetPlanetDiv = amazingPlanet.srcElement;

    const text = `This is ${planetData.name}.
    Its diameter is about ${planetData.diameter}km and its color is ${planetData.color} `;

    const tool = document.createElement('div');
    const tip = document.createTextNode(text);

    tool.className = 'tooltip';
    tool.style.position = 'absolute';
    tool.style.top = '-80px';
    tool.style.left = '0px';
    tool.style.background = 'black';
    tool.style.padding = '1em';
    tool.style.zIndex = '10';
    tool.style.borderRadius = '20px';
    tool.style.transform = 'translateY(-50%)';
    tool.style.width = '200px';
    targetPlanetDiv.appendChild(tool);
    tool.appendChild(tip);
}

function removeTooltip() {
    const getToolTip = document.querySelector('.tooltip');
    getToolTip.remove();
}
