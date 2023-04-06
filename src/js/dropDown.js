import { recipes } from "../data/recipes.js";
import { searchAlgorithme } from "./searchAlgo.js";

// loop for ingredients
let ingredientsArray = [];
for (let recipe of recipes) {
  ingredientsArray.push(...recipe.ingredients);
}
// reformat ingredientsArray
ingredientsArray = ingredientsArray

  .map((ingredient) => {
    // ajout d'une balise pour créer le lien
    return (
      "<a class=dropdown-choices-ingredient href='#'><li class=dropdown-choices-ingredient-list  >" +
      ingredient.ingredient.toLowerCase() +
      "</li></a>"
    );
  })

  .filter((ingredient, index, ingredientList) => {
    // récupère l'index de l'ingrédient actuellement dans la liste
    // Si l'index est différent de mon element actuel,
    // j'ai au moins un autre élément avec le même nom
    // indexOf recupère le premier element de ma liste
    return ingredientList.indexOf(ingredient) == index;
  })
  .join("");
// loop for appliances
let applianceArray = [];
for (let recipe of recipes) {
  applianceArray.push(recipe.appliance);
}
// reformat applianceArray
applianceArray = applianceArray
  .map((appliance) => {
    // ajout d'une balise pour créer le lien
    return (
      "<a class='dropdown-choices-appliance' href='#'><li class='dropdown-choices-appliance-list' >" +
      appliance.toLowerCase() +
      "</li></a>"
    );
  })
  .filter((appliance, index, applianceList) => {
    return applianceList.indexOf(appliance) == index;
  })
  .join("");
// loop for Ustensils
let ustensilsArray = [];
for (let recipe of recipes) {
  ustensilsArray.push(...recipe.ustensils);
}
// reformat ustensilsArray
ustensilsArray = ustensilsArray
  .map((ustensils) => {
    // ajout d'une balise pour créer le lien
    return (
      "<a class='dropdown-choices-ustensils' href='#'><li class='dropdown-choices-ustensils-list' >" +
      ustensils.toLowerCase() +
      "</li></a>"
    );
  })
  .filter((ustensils, index, ustensilsList) => {
    return ustensilsList.indexOf(ustensils) == index;
  })
  .join("");

// Initialisation des différents dropDowns
function initTheContainer(btn, container) {
  // console.log(btn);
  // console.log(container);

  const getTheUlIngredients = container.querySelector("#ingredients-dropdown");
  const getTheUlAppliance = container.querySelector("#appliances-dropdown");
  const getTheUlUstensils = container.querySelector("#utensils-dropdown");

  // Event au click, ouverture des différents dropdown
  btn.addEventListener("click", (e) => {
    container.classList.add("show");

    // e.target.matches("#ingredients-tag-btn") permet de faire matcher ma cible avec l'id
    if (e.target.matches("#ingredients-tag-btn")) {
      getTheUlIngredients.classList.add("show");
      getTheUlIngredients.innerHTML = ingredientsArray;
      // console.log(ingredientsArray);
    } else if (e.target.matches("#appliances-tag-btn")) {
      getTheUlAppliance.classList.add("show");
      getTheUlAppliance.innerHTML = applianceArray;
    } else if (e.target.matches("#utensils-tag-btn")) {
      getTheUlUstensils.classList.add("show");
      getTheUlUstensils.innerHTML = ustensilsArray;
    }
  });
  // Event au click d'une balise, ajout d'un tag
}

// Fermeture des différents dropdown
function closeTheContainer() {
  let ingredientContainer = document.querySelector(
    "#open-ingredient-container"
  );
  let appareilsContainer = document.querySelector("#open-appareils-container");
  let utensilsContainer = document.querySelector("#open-utensils-container");
  // on click of the other element, close the last open
  window.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.matches("#ingredients-tag-btn")) {
      appareilsContainer.classList.remove("show");
      utensilsContainer.classList.remove("show");
    }
    // si on clique sur l'input, cela arrettera la fermeture des dropdown
    else if (e.target.matches(".tag-search-input")) {
      e.stopPropagation;
    } else if (e.target.matches("#appliances-tag-btn")) {
      ingredientContainer.classList.remove("show");
      utensilsContainer.classList.remove("show");
    } else if (e.target.matches("#utensils-tag-btn")) {
      ingredientContainer.classList.remove("show");
      appareilsContainer.classList.remove("show");
    } else {
      utensilsContainer.classList.remove("show");
      ingredientContainer.classList.remove("show");
      appareilsContainer.classList.remove("show");
    }
  });
}

// Fonction qui permet de centraliser les fonctions, et les exporter dans la factory
export function dropDownContainer() {
  let ingredientsBtnTag = document.querySelector("#ingredients-tag-btn");
  // console.log(ingredientsBtnTag);
  let appliancesBtnTag = document.querySelector("#appliances-tag-btn");
  let utensilsBtnTag = document.querySelector("#utensils-tag-btn");
  let ingredientContainer = document.querySelector(
    "#open-ingredient-container"
  );
  let appareilsContainer = document.querySelector("#open-appareils-container");
  let utensilsContainer = document.querySelector("#open-utensils-container");

  initTheContainer(ingredientsBtnTag, ingredientContainer);
  initTheContainer(appliancesBtnTag, appareilsContainer);
  initTheContainer(utensilsBtnTag, utensilsContainer);

  // SEARCH ALGO
  searchAlgorithme(ingredientsBtnTag, appliancesBtnTag, utensilsBtnTag);

  closeTheContainer();
  return;
}
dropDownContainer();
