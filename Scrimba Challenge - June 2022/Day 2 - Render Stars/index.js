const galaxy = document.getElementById('galaxy');
const starCount = Math.floor(Math.random() * 100) + 100;

const starVariation = new Array(starCount).fill('🌟🌠⭐✨').join('');

galaxy.innerHTML = starVariation;