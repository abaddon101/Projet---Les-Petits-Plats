//////////////////////////// SEARCH ALGO VERSION 1 ////////////////////////////
import { recipes } from "../data/recipes.js";

console.log(recipes);
// loop for name
let nameArray = [];
for (let recipe of recipes) {
  nameArray.push(...recipe.name);
  console.log(recipe.name);
}
nameArray = nameArray.map((name) => {
  // ajout d'une balise pour créer le lien
  return name.toLowerCase();
});
console.log(nameArray);

// get the id

export function searchAlgorithme(ingredients, appareil, ustensils) {
  console.log(ingredients);
  console.log(appareil);
  console.log(ustensils);
  // modification de l'input barre de recherche
  // recherche par barre de recherche par 3  caractères grâce à une regexp
  // s'actualise pour chaque nouveau caractère
  // faire une recherche par name
  const searchInputBar = document.querySelector("#search-input");

  searchInputBar.addEventListener("change", function () {
    console.log("SearchBar Modifié");
  });
  // au clic
  window.addEventListener("click", function (e) {
    if (e.target.matches(".dropdown-choices-ingredient-list")) {
      e.stopPropagation;
      console.log(e.target.textContent);
      selectTags();
    } else if (e.target.matches(".dropdown-choices-appliance-list")) {
      e.stopPropagation;
      console.log(e.target.textContent);
      selectTags();
    } else if (e.target.matches(".dropdown-choices-ustensils-list")) {
      e.stopPropagation;
      console.log(e.target.textContent);
      selectTags();
    }
  });

  // creation elements Tags
  function selectTags() {
    window.addEventListener("click", (e) => {
      if (e.target.matches(".dropdown-choices-ingredient-list")) {
        const selectTagsId = document.querySelector("#selected-tags");
        const createTags = document.createElement("div");
        selectTagsId.appendChild(createTags);
        createTags.innerHTML = e.target.textContent;
      } else if (e.target.matches(".dropdown-choices-appliance-list")) {
        const selectTagsId = document.querySelector("#selected-tags");
        const createTags = document.createElement("div");
        selectTagsId.appendChild(createTags);
        createTags.innerHTML = e.target.textContent;
      }
      if (e.target.matches(".dropdown-choices-ustensils-list")) {
        const selectTagsId = document.querySelector("#selected-tags");
        const createTags = document.createElement("div");
        selectTagsId.appendChild(createTags);
        createTags.innerHTML = e.target.textContent;
      }
    });

    return;
  }

  // selection des listes
  // faire une recherche par ingredients
  const searchInputBarIngredient = document.querySelector(
    "#ingredients-tag-input"
  );
  // faire une recherche par appliance
  const searchInputBarAppliances = document.querySelector(
    "#appliances-tag-input"
  );
  // faire une recherche par ustensils
  const searchInputBarUstensil = document.querySelector("#utensils-tag-input");
  // recherche par filtres/tags
  // les champs ingrédients, ustensils, et appareils
  // s'actualise pour chaque nouveau caractère
  // proposent seulement les éléments restants
  // les retours de recherche doivent être une intersection des résultats,
  // si on ajoute tags coco et chocolat on doit récupérer les rectte ayant coco et chocolat
}
