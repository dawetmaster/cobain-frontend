// Database
const movies = [
    {
        name: 'Tokyo Revengers',
        censor: '13+',
        image: './img/tokrev.jpg'
    },
    {
        name: 'The Medium',
        censor: '17+',
        image: './img/the-medium.jpg'
    },
    {
        name: 'Nussa',
        censor: 'Semua Umur',
        image: './img/nussa.jpg'
    },
    {
        name: 'Shang Chi',
        censor: 'Semua Umur',
        image: './img/shang-chi.jpg'
    },
    {
        name: 'No Time To Die',
        censor: '13+',
        image: './img/no-time-to-die.jpg'
    },
    {
        name: 'Candyman',
        censor: '17+',
        image: './img/candyman.jpg'
    },
    {
        name: 'Hostage: Missing Celebrity',
        censor: '17+',
        image: './img/hostage.jpg'
    },
    {
        name: 'Kimetsu Orchestra Concert',
        censor: '13+',
        image: './img/kimetsu.jpg'
    },
    {
        name: 'Roh Mati Paksa',
        censor: '17+',
        image: './img/roh-mati-paksa.jpg'
    },
    {
        name: 'Malignant',
        censor: '17+',
        image: './img/malignant.jpg'
    },
    {
        name: 'Dune',
        censor: 'Semua Umur',
        image: './img/dune.jpg'
    },
    {
        name: 'Halloween Kills',
        censor: '17+',
        image: './img/halloween-kills.jpg'
    },
    {
        name: 'Free Guy',
        censor: '13+',
        image: './img/freeguy.jpg'
    },
];

// Get Element
const movielist = document.getElementById("movielist");

// Create element
for (let movie of movies) {
    var moviecard = document.createElement("div");
    moviecard.className = "card";

    var cardimg = document.createElement("div");
    cardimg.className = "card-image";
    cardimg.innerHTML = "<img src=\"" + movie.image + "\" alt=\"" + movie.name + "\"/>";
    moviecard.appendChild(cardimg);

    var carddesc = document.createElement("div");
    carddesc.className = "card-text";

    var cardtitle = document.createElement("h4");
    cardtitle.innerHTML = "<b>" + movie.name + "</b>";
    carddesc.appendChild(cardtitle);

    var cardsub = document.createElement("p");
    cardsub.innerHTML = movie.censor;
    carddesc.appendChild(cardsub);

    moviecard.appendChild(carddesc);

    movielist.appendChild(moviecard);
}
