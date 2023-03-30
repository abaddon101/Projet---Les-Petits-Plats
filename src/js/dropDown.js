import { recipes } from "../data/recipes.js";

let ingredientsArray = [];
// console.log(recipes[0].ingredients);
for (let recipe of recipes) {
  // console.log(recipe);
  ingredientsArray.push(...recipe.ingredients);
}

// reformat ingredientsArray
ingredientsArray = ingredientsArray
  .map((ingredient) => {
    return ingredient.ingredient.toLowerCase();
  })
  .filter((ingredient, index, ingredientList) => {
    // je recupère l'index de l'ingrédient que j'ai actuellement dans la liste
    // Si l'index est différent de mon element actuel,
    // j'ai au moins un autre éléemtn avec le même nom
    // indexOf recupère le premier element de ma liste
    return ingredientList.indexOf(ingredient) == index;
  })
  .toString();

console.log(ingredientsArray);

function initTheContainer(btn, container) {
  const getTheInput = container.querySelector(".tag-search-input");
  const getTheUl = container.querySelector(".dropdown-choices");
  
  getTheUl.innerHTML = "<li></li>";
  getTheInput.addEventListener("keyup", () => {
    console.log(getTheInput.value);
  });
  btn.addEventListener("click", () => {
    container.classList.add("show");
  });

  // tag-search-input
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
console.log("dropdown");
