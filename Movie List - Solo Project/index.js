document.onreadystatechange = () => {
    if (document.readyState === 'interactive' && window.location.pathname === '/watchlist.html') {
        loadFavorite();
    }
};

const apiKey = 'apikey=25851faa';
const mainList = document.getElementById('list');
const searchBtn = document.getElementById('search');
const userQuery = document.getElementById('query');

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (userQuery.value === (undefined || '')) {
        mainList.innerHTML = `
        <div class="message">
        <p>Please enter a valid movie name 😉</p>
        </div>`;
        return;
    }
    mainList.innerHTML = `<img class="wheel" src="./images/loading.gif" />`;
    getImdbId(userQuery.value);
});

// Get the list of movie and extract the imdb IDs

async function getImdbId(query) {
    const res = await fetch(`https://www.omdbapi.com/?&${apiKey}&s=${query}&type=movie`);
    const data = await res.json();
    try {
        let extractedID = data.Search.sort((a, b) => b.Year - a.Year).map((movie) => movie.imdbID);
        extractedID = [...new Set(extractedID)];
        getMovieList(extractedID);
    } catch (error) {
        mainList.innerHTML = `
        <div class="message error">
        <p>I'm a smart program but either I couldn't find any
        movie or an error occured in the matrix 😕<br><br>Please try again</p>
        </div>`;
    }
}

// with the imdbIDs identify the movies and get the missing data.

async function getMovieList(imdbIDs) {
    mainList.innerHTML = '';
    const movieList = [];
    for (let i = 0; i < imdbIDs.length; i++) {
        const res = await fetch(`https://www.omdbapi.com/?&${apiKey}&i=${imdbIDs[i]}&type=movie`);
        const data = await res.json();

        movieList.push({
            Title: `${data.Title}`,
            Poster: `${data.Poster}`,
            Runtime: `${data.Runtime}`,
            Genre: `${data.Genre}`,
            Plot: `${data.Plot}`,
            Year: data.Year,
            Rating: data.imdbRating,
            Id: `${data.imdbID}`,
        });
    }
    renderMovieList(movieList);
}

// render movie to the DOM

function renderMovieList(list) {
    list.forEach((movie) => {
        mainList.innerHTML += `
    <div class="movie-container">
                <img class="movie-poster" src='${movie.Poster === 'N/A' ? './images/movie-poster.png' : movie.Poster}' alt='A poster of the movie ${movie.Title} from ${movie.Year}'>
                <div class="movie-data">
                    <div class="title-rating">
                        <div class="movie-title">${movie.Title}</div>
                        <div class="movie-rating"><i class="fa-solid fa-star"></i>${movie.Rating}</div>
                    </div>

                    <div class="meta-info">
                        <div class="meta-info-length">${movie.Runtime}</div>
                        <div class="meta-info-genre">${movie.Genre}</div>
                        <button class="watchlist-add-btn btn" id="${movie.Id}" aria-label="click to add ${movie.Title} to your watchlist"><i class="fa-solid fa-circle-plus"></i>Watchlist</button>
                    </div>
                    <div class="synopsis">
                    ${movie.Plot === 'N/A' ? '' : movie.Plot}
                    </div>
                </div>
            </div>
            <hr />
    `;
    });
    addListenerToBtn();
}

function addListenerToBtn() {
    const btnList = document.querySelectorAll('.btn');
    btnList.forEach((el) => {
        el.addEventListener('click', () => {
            if (window.location.pathname === '/watchlist.html') {
                removeFromWatchlist(el.id);
            } else {
                addToWatchlist(el.id);
                el.classList.add('added');
                el.innerHTML = '<i class="fa-solid fa-circle-check"></i>Added';
                el.disabled = true;
            }
        });
    });
}

// button add item to localStorage

function addToWatchlist(id) {
    const movieAddedToWatchlist = localStorage.getItem('watchlist')
        ? JSON.parse(localStorage.getItem('watchlist'))
        : [];

    movieAddedToWatchlist.push(id);
    localStorage.setItem('watchlist', JSON.stringify(movieAddedToWatchlist));
}

// button remove item to localStorage

function removeFromWatchlist(id) {
    const remove = JSON.parse(localStorage.getItem('watchlist')).filter((el) => el !== id);
    localStorage.setItem('watchlist', JSON.stringify(remove));
    location.reload();
}

// Load localStorage list on the watchlist page

function loadFavorite() {
    if (JSON.parse(localStorage.getItem('watchlist')).length === 0) {
        mainList.innerHTML = `<div class="message">
        <p>Your watch list is looking a little empty...</p>
        <a href="./index.html"
            ><p><i class="fa-solid fa-circle-plus"></i>Let's add some cool movies!</p></a>
        </div>`;
    } else {
        let favorites = JSON.parse(localStorage.getItem('watchlist'));
        favorites = [...new Set(favorites)];
        getMovieList(favorites).then(() => {
            document.querySelectorAll('button.btn').forEach((el) => {
                el.innerHTML = '<i class="fa-solid fa-circle-minus"></i>Remove';
            });
        });
    }
    addListenerToBtn();
}
