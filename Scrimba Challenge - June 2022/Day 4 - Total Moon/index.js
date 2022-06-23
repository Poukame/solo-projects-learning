const solarSystem = document.getElementById('solarSystem');
const planetsObj = [
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

function renderMoons() {
    planetsObj.map((planet) => {
        const planetDiv = document.createElement('div');
        planetDiv.innerHTML = `<b>${planet.name}</b> : ${planet.moons}`;
        return solarSystem.appendChild(planetDiv);
    });

    const totalMoons = planetsObj.reduce((acc, cur) => (acc += cur.moons), 0);
    const totalMoonsHTML = solarSystem.appendChild(document.createElement('div'));

    totalMoonsHTML.classList.add('total-moons-p');
    totalMoonsHTML.innerHTML = `<strong>🌘 Total Moons in the Solar System: <span class="counter"><span></strong> 🌘`;

    document.documentElement.style.setProperty('--counterend', `${totalMoons}`);
}

renderMoons();
