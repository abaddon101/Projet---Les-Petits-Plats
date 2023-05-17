import { recipes } from "../data/recipes.js";
// import { sortRecipes } from "../js/sortRecipes.js";
import { searchAlgo } from "./algoDeRecherche.js";
import { dropDownContainer } from "../js/dropDown.js";
//creation of an object with the array
const recipesArray = Object.entries(recipes);

//Boucle Create element
const create = (elm, attributes) => {
  // console.log(attributes);
  const element = document.createElement(elm);
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  return element;
};

const createCard = (recipe) => {
  // console.log(recipe);
  //Image
  let image = create("div", {
    class: "card-img-top card-img-placeholder",
    alt: "card-image",
  });

  //Title
  let title = create("h2", {
    class: "card-title w-50 card-content-title",
  });
  //   console.log(recipe[1].name);
  title.textContent = recipe[1].name;

  let timeParent = create("div", {
    class: "d-flex font-weight-bold",
  });
  timeParent.innerHTML =
    "<span class='far fa-clock mt-2' style='font-size:1.5rem'></span>" +
    "<p class='ml-2' style='font-size:1.5rem'>" +
    recipe[1].time +
    " min</p>";

  //Header elements
  let headerParent = create("div", {
    class: "d-flex justify-content-between mt-3 px-3",
  });
  headerParent.appendChild(title);
  headerParent.appendChild(timeParent);

  //Ingredients list
  let ingredientContainer = create("div", {
    class: "ingredient-container",
  });

  let eachIngredient = recipe[1].ingredients
    .map(function (ingredients) {
      let quantity = ingredients.quantity ?? "";
      let unit = ingredients.unit ?? "";

      return (
        "<p class='mb-0'><span class='font-weight-bold ingredient'>" +
        ingredients.ingredient +
        "</span>: " +
        quantity +
        unit +
        "</p>"
      );
    })
    .join("");

  ingredientContainer.innerHTML = eachIngredient;

  //cook instruction / method
  let method = create("p", {
    class: "description w-50",
  });
  method.textContent = recipe[1].description;

  //Card body
  let cardBody = create("div", {
    class: "card-body d-flex justify-content-between card-content",
  });

  //Put in card body
  cardBody.appendChild(ingredientContainer);
  cardBody.appendChild(method);

  //Card container
  let cardContainer = create("article", {
    class: "card recipe-card pb-3 mb-5",
  });

  //to DOM
  // get the data appliance and ustensils for set attribut to the article :cardContainer
  const getAppliance = recipe[1].appliance;
  // console.log(recipe);
  const getUstensils = recipe[1].ustensils;
  const getIngredients = recipe[1].ingredients.map((ingredient) => {
    return ingredient.ingredient;
  });
  cardContainer.setAttribute("data-appliance", getAppliance);
  cardContainer.setAttribute("data-ustensils", getUstensils);
  cardContainer.setAttribute("data-ingredients", getIngredients);

  // console.log(getAppliance);
  cardContainer.appendChild(image);
  cardContainer.appendChild(headerParent);
  cardContainer.appendChild(cardBody);

  //declare main
  let mainSection = document.getElementById("main");

  //Put
  mainSection.appendChild(cardContainer);
};
//
// Ici, mon pour chaque élement de mon tableau recipesArray, il recoit l'élément recipes,
// de cette élement recipe, il va créer les recipes grâce au createCard

recipesArray.forEach((recipe) => createCard(recipe));

function initTheAlgo() {
  searchAlgo();
}

initTheAlgo();
