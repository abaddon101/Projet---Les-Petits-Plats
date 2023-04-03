import { recipes } from "../data/recipes.js";

let ingredientsArray = [];
// loop for ingredients
for (let recipe of recipes) {
  //  console.log(recipe);
  ingredientsArray.push(...recipe.ingredients);
  // console.log(...recipe.ingredients);
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
  .toString();
console.log(ingredientsArray);

let applianceArray = [];
// loop for appliances
for (let recipe of recipes) {
  // console.log(recipe);
  applianceArray.push(recipe.appliance);
  // console.log(recipe.appliance);
}
// reformat ingredientsArray
applianceArray = applianceArray
  .map((appliance) => {
    return "<li>" + appliance + "</li>";
  })
  .filter((appliance, index, applianceList) => {
    return applianceList.indexOf(appliance) == index;
  })
  .toString();
console.log(applianceArray);

let ustensilsArray = [];
// loop for Ustensils
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
  .toString();
console.log(ustensilsArray);

function initTheContainer(btn, container) {
  console.log(btn);
  console.log(container);
  const getTheInput = container.querySelector(".tag-search-input");

  const getTheUlIngredients = container.querySelector("#ingredients-dropdown");
  const getTheUlAppliance = container.querySelector("#appliances-dropdown");
  const getTheUlUstensils = container.querySelector("#utensils-dropdown");

  btn.addEventListener("click", (e) => {
    console.log(e.target);
    container.classList.add("show");
    if (e.target.matches("#ingredients-tag-btn")) {
      console.log("ingrédients");
      getTheUlIngredients.classList.add("show");
      getTheUlIngredients.innerHTML = ingredientsArray;
    } else if (e.target.matches("#appliances-tag-btn")) {
      console.log("appliance");
      getTheUlAppliance.classList.add("show");
      getTheUlAppliance.innerHTML = applianceArray;
    } else if (e.target.matches("#utensils-tag-btn")) {
      console.log("ustensils");
      getTheUlUstensils.classList.add("show");
      getTheUlUstensils.innerHTML = ustensilsArray;
    }
  });
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
  return;
}
dropDownContainer();
