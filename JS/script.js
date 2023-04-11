const regionData = [
  {
      id:1,
      caption: "All",
      route:"all"
  },
  {
      id:2,
      caption:"Africa",
      route:"africa"
  },
  {
      id:3,
      caption:"Europe",
      route:"europe"
  },
  {
      id:4,
      caption:"Americas",
      route:"americas"
  },
  {
      id:5,
      caption:"Asia",
      route:"asia"
  },
  {
      id:6,
      caption:"Oceania",
      route:"oceania"
  }
]

const URL = "https://restcountries.com/v3.1";
const category = {all: "all", region: "region", name: "name"};

const buttonContainer = document.querySelector(".header__list");
const countryContainer = document.querySelector(".country__container");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");




window.addEventListener("load", () => {
  cardButton.call(regionData);
  getData(URL, "all");
});

function cardButton() {
  const template = this.map(item => `
    <li class="header__item">
      <button onclick="getRoute('${item.route}')" class="header__button">
        ${item.caption}
      </button>
    </li>
  `).join("");

  buttonContainer.innerHTML = template;
};


function getData(baseURL, route) {
  fetch(`${baseURL}/${route}`)
    .then(res => res.json())
    .then(res => cardTemplate.call(res));
}

function getRoute(route) {
  if(route === "all") {
    getData(URL, route)
  } else {
    getData(URL, `region/${route}`)
  }
}

function cardTemplate() {
  const template = this.map(({name: {common}, flags}) => `
    <div class="country-card">
      <div class="country-card__img">
        <img src="${flags.png}" alt="${common}">
      </div>
      <p class="country-card__name">
        ${common}
      </p>
    </div>
  `).join("");

  countryContainer.innerHTML = template;
};


/*SEARCH*/
searchButton.addEventListener("click", (e) => {
  e.preventDefault();

  getData(URL, )
})