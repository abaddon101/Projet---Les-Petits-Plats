// Solution 1
export function searchAlgo() {
  const searchBar = document.querySelector("#search-input");
  // console.log("searchAlgo");

  searchBar.addEventListener("input", (e) => {
    updateSearch();
  });
}
function updateSearch() {
  const searchBar = document.querySelector("#search-input");
  // console.log(searchBar.value);
  const cards = document.querySelectorAll(".card");
  filterElement(searchBar.value, cards, window.search);
  // console.log(window.search);
}
function filterElement(searchWords, element, tags) {
  // console.log(tags);
  const filterRecipes = [];
  // const filteredItems = [];

  const words = searchWords.toLowerCase().trim().split(" ");

  let isMatched = true;
  // ajout d'une variable pour vérifier si la recherche est en cours
  let isFiltering = false;
  let mainSection = document.getElementById("main");
  for (let i = 0; i < element.length; i++) {
    isMatched = true;
    if (searchWords.length >= 3) {
      for (let word of words) {
        //Si mot clé = chaîne vide, la boucle continue avec l'itération suivante.
        if (word === "") {
          continue;
        }

        // Sinon, la fonction vérifie si l'un des quatre éléments d'une recette
        // (textContent, appliance, ustensils, et ingredients) contient le mot clé
        // Si aucun de ces éléments ne contient le mot clé,
        // alors la variable "isMatched" est définie sur false
        if (
          !element[i].textContent.toLowerCase().includes(word) &&
          !element[i].dataset.appliance.toLowerCase().includes(word) &&
          !element[i].dataset.ustensils.toLowerCase().includes(word) &&
          !element[i].dataset.ingredients.toLowerCase().includes(word)
        ) {
          isMatched = false;
        }
        if (!isMatched) {
          // si aucun mot clé ne correspond, la recherche n'est pas effectuée
          isFiltering = true; // indique qu'une recherche est en cours
          break;
        }
      }
    }
    //  parcourt chaque mot clé contenu dans la variable "words".

    // console.log(tags.ingredients);
    for (let ingredient of tags.ingredients) {
      if (
        !element[i].dataset.ingredients
          .toLowerCase()
          .includes(ingredient.toLowerCase())
      ) {
        isMatched = false;
      }
      // console.log(ingredient);
    }

    for (let appareil of tags.appareils) {
      if (
        !element[i].dataset.appliance
          .toLowerCase()
          .includes(appareil.toLowerCase())
      ) {
        isMatched = false;
      }
      // console.log(appareil);
    }

    for (let ustensil of tags.ustensils) {
      if (
        !element[i].dataset.ustensils
          .toLowerCase()
          .includes(ustensil.toLowerCase())
      ) {
        isMatched = false;
      }
      // console.log(ustensil);
    }
    // Si tous les mots clés ont été vérifiés et que "isMatched" est toujours à true,
    // la recette est stockée dans un tableau nommé "filterRecipes".
    if (isMatched) {
      filterRecipes.push(element[i]);
      // filteredItems.push(element[i]);
    }
  }
  // console.log(filteredItems);
  //
  for (let i = 0; i < element.length; i++) {
    if (filterRecipes.includes(element[i])) {
      element[i].style.display = "block";
    } else {
      element[i].style.display = "none";
    }
  }
  if (isFiltering && filterRecipes.length === 0) {
    // si aucun élément ne correspond à la recherche
    const errorElement = document.querySelector("#search-error");
    errorElement.innerHTML = `Aucune recette ne correspond à votre critère…
     vous pouvez chercher « tarte aux pommes »,
      « poisson », etc.`;

    // sélectionne l'élément d'erreur
    errorElement.style.display = "block"; // affiche l'élément d'erreur
  } else {
    const errorElement = document.querySelector("#search-error"); // sélectionne l'élément d'erreur
    errorElement.style.display = "none"; // masque l'élément d'erreur
  }
}
searchAlgo();
window.updateSearch = updateSearch;
