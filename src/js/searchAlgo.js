//////////////////////////// SEARCH ALGO VERSION 1 ////////////////////////////
import { recipes } from "../data/recipes.js";

let ingredientTags = [];
// recupère toute mes recettes
recipes.forEach((recipe) => {
  // console.log(recipe);
  // recupère tout mes ingrédients présent dans mes {}
  recipe.ingredients.forEach(({ ingredient }) => {
    console.log(ingredient);
    const wordingredient =
      // recupère le premier caractère de la chaine et le met en maj
      ingredient.charAt(0).toUpperCase() +
      // ensuite, permet d'accéder au reste des caractère de la chaine
      // en faisant ommencer au deuxième caractère
      ingredient.substring(1).toLowerCase();
    // si mon tableau inclu la constante wordIngredient, alors on push le tableau
    if (!ingredientTags.includes(wordingredient)) {
      ingredientTags.push(wordingredient);
    }
  });
});

const table = [ingredientTags];
// mon tableau recupère tout les noms des ingrédients
console.log(table);

// // loop for name

// let nameArray = [];
// for (let recipe of recipes) {
//   nameArray.push(...recipe.name);
//   console.log(recipe.name);
// }
// nameArray = nameArray.map((name) => {
//   // ajout d'une balise pour créer le lien
//   return name.toLowerCase();

// });

// get the id

export function searchAlgorithme(ingredients, appareil, ustensils) {
  // console.log(ingredients);
  // console.log(appareil);
  // console.log(ustensils);
  // modification de l'input barre de recherche
  // recherche par barre de recherche par 3  caractères grâce à une regexp
  // s'actualise pour chaque nouveau caractère
  // faire une recherche par name
  const searchInputBar = document.querySelector("#search-input");

  searchInputBar.addEventListener("change", function () {
    console.log("SearchBar Modifié");
  });
  // au clic de mes éléments, lance la fonction selectTags
  // => afficher les tags séléctionnés
  window.addEventListener("click", function (e) {
    if (e.target.matches(".dropdown-choices-ingredient-list")) {
      console.log(e.target.textContent);
      selectTags();
    } else if (e.target.matches(".dropdown-choices-appliance-list")) {
      console.log(e.target.textContent);
      selectTags();
    } else if (e.target.matches(".dropdown-choices-ustensils-list")) {
      console.log(e.target.textContent);
      selectTags();
    }
  });

  // creation elements Tags
  function selectTags() {
    const selectTagsId = document.querySelector("#selected-tags");
    const createTags = document.createElement("div");
    selectTagsId.appendChild(createTags);

    createTags.innerHTML = "élement cliqué";

    // trouver un moyen d'afficher dès le premier élément
    // empecher l'incrémenation de +1 à chaque fois.
    // window.addEventListener("click", (e) => {
    //   // pourquoi ça incrément +1 + 2 + 3...
    //   if (e.target.matches(".dropdown-choices-ingredient-list")) {
    //     const selectTagsId = document.querySelector("#selected-tags");
    //     const createTags = document.createElement("div");
    //     selectTagsId.appendChild(createTags);
    //     createTags.innerHTML = e.target.textContent;
    //   }
    //   // pourquoi ça incrément +1 + 2 + 3...
    //   else if (e.target.matches(".dropdown-choices-appliance-list")) {
    //     const selectTagsId = document.querySelector("#selected-tags");
    //     const createTags = document.createElement("div");
    //     selectTagsId.appendChild(createTags);
    //     createTags.innerHTML = e.target.textContent;
    //   }
    //   // pourquoi ça incrément +1 + 2 + 3...
    //   else if (e.target.matches(".dropdown-choices-ustensils-list")) {
    //     const selectTagsId = document.querySelector("#selected-tags");
    //     const createTags = document.createElement("div");
    //     selectTagsId.appendChild(createTags);
    //     createTags.innerHTML = e.target.textContent;
    //   }
    // });

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
