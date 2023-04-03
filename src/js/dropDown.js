import { recipes } from "../data/recipes.js";

// loop for ingredients
let ingredientsArray = [];
for (let recipe of recipes) {
  ingredientsArray.push(...recipe.ingredients);
}
// reformat ingredientsArray
ingredientsArray = ingredientsArray
  .map((ingredient) => {
    return "<li>" + ingredient.ingredient.toLowerCase() + "</li>";
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
// reformat ingredientsArray
applianceArray = applianceArray
  .map((appliance) => {
    return "<li>" + appliance.toLowerCase() + "</li>";
  })
  .filter((appliance, index, applianceList) => {
    return applianceList.indexOf(appliance) == index;
  })
  .join("");

// loop for Ustensils
let ustensilsArray = [];
for (let recipe of recipes) {
  ustensilsArray.push(recipe.ustensils);
}
// reformat ingredientsArray
ustensilsArray = ustensilsArray
  .map((ustensils) => {
    return "<li>" + ustensils + "</li>";
  })
  .filter((ustensils, index, ustensilsList) => {
    return ustensilsList.indexOf(ustensils) == index;
  })
  .join("");

function initTheContainer(btn, container) {
  const getTheInput = container.querySelector(".tag-search-input");
  const getTheUlIngredients = container.querySelector("#ingredients-dropdown");
  const getTheUlAppliance = container.querySelector("#appliances-dropdown");
  const getTheUlUstensils = container.querySelector("#utensils-dropdown");

  btn.addEventListener("click", (e) => {
    container.classList.add("show");
    // e.target.matches("#ingredients-tag-btn") permet de faire matcher ma cible avec l'id
    if (e.target.matches("#ingredients-tag-btn")) {
      getTheUlIngredients.classList.add("show");
      getTheUlIngredients.innerHTML = ingredientsArray;
    } else if (e.target.matches("#appliances-tag-btn")) {
      getTheUlAppliance.classList.add("show");
      getTheUlAppliance.innerHTML = applianceArray;
    } else if (e.target.matches("#utensils-tag-btn")) {
      getTheUlUstensils.classList.add("show");
      getTheUlUstensils.innerHTML = ustensilsArray;
    }
  });
}
function closeTheContainer(btn, container) {
  // console.log(btn);
  console.log(container);

  let ingredientContainer = document.querySelector(
    "#open-ingredient-container"
  );
  let appareilsContainer = document.querySelector("#open-appareils-container");
  let utensilsContainer = document.querySelector("#open-utensils-container");
  // on click of the other element, close the last open
  window.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.matches("#ingredients-tag-btn")) {
      // appareilsContainer.classList.remove("show");
      // utensilsContainer.classList.remove("show");
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

function opendropDownIngredients() {
  getTheUlIngredients.classList.add("show");
  getTheUlIngredients.innerHTML = ingredientsArray;
  appareilsContainer.classList.remove("show");
  utensilsContainer.classList.remove("show");
}

export function dropDownContainer() {
  let ingredientsBtnTag = document.querySelector("#ingredients-tag-btn");
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

  closeTheContainer(ingredientsBtnTag, ingredientContainer);
  closeTheContainer(appliancesBtnTag, appareilsContainer);
  closeTheContainer(utensilsBtnTag, utensilsContainer);
  return;
}
dropDownContainer();
