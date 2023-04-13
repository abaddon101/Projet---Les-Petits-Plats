import { recipes } from "../data/recipes.js";
// import { searchAlgorithme } from "./searchAlgo.js";
// Création de 3 tableaux: Ingrédients, Appareil & Ustensils
// Qui seront apellés dans la dropDownContainer
// Qui apellera les fonctions initContainer
const selectedIngredients = [];
const selectedAppareils = [];
const selectedUstensils = [];

// loop for ingredients
let ingredientsArray = [];
for (let recipe of recipes) {
  ingredientsArray.push(...recipe.ingredients);
}
// reformat ingredientsArray
ingredientsArray = ingredientsArray

  .map((ingredient) => {
    // ajout d'une balise pour créer le lien
    return ingredient.ingredient.toLowerCase();
  })

  .filter((ingredient, index, ingredientList) => {
    // récupère l'index de l'ingrédient actuellement dans la liste
    // Si l'index est différent de mon element actuel,
    // j'ai au moins un autre élément avec le même nom
    // indexOf recupère le premier element de ma liste
    return ingredientList.indexOf(ingredient) == index;
  });
// loop for appliances
let applianceArray = [];
for (let recipe of recipes) {
  applianceArray.push(recipe.appliance);
}
// reformat applianceArray
applianceArray = applianceArray
  .map((appliance) => {
    // ajout d'une balise pour créer le lien
    return appliance.toLowerCase();
  })
  .filter((appliance, index, applianceList) => {
    return applianceList.indexOf(appliance) == index;
  });
// loop for Ustensils
let ustensilsArray = [];
for (let recipe of recipes) {
  ustensilsArray.push(...recipe.ustensils);
}
// reformat ustensilsArray
ustensilsArray = ustensilsArray
  .map((ustensils) => {
    // ajout d'une balise pour créer le lien
    return ustensils.toLowerCase();
  })
  .filter((ustensils, index, ustensilsList) => {
    return ustensilsList.indexOf(ustensils) == index;
  });

// Initialisation des différents dropDowns
function initTheContainer(btn, container, listElements, listElementsSelected) {
  // console.log(listElements);
  //les tableaux sont vides jusqu'a çe qu'on les exploite
  // console.log(listElementsSelected);

  const listContainer = container.querySelector(".dropdown-choices");
  // console.log(listContainer);
  const inputSearch = container.querySelector(".tag-search-input");
  const selectTagsId = document.querySelector("#selected-tags");
  const createTags = document.createElement("button");
  createTags.className = "tags";

  // Event au click, ouverture des différents dropdown
  btn.addEventListener("click", (e) => {
    container.classList.add("show");
  });
  inputSearch.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    displayList(
      listContainer,
      listElements,
      e.target.value,
      listElementsSelected
    );
  });
  displayList(listContainer, listElements, "", listElementsSelected);

  // Event, au clic d'un tag, on le supprime du selectTagsId
}
function displayList(
  listContainer,
  listElements,
  search,
  listElementsSelected
) {
  console.log(listElementsSelected);
  listContainer.innerHTML = listElements
    .filter((element) => {
      if (listElementsSelected.indexOf(element) != -1) {
        return false;
      }
      return element.includes(search);
    })
    .map((element) => {
      return "<li>" + element + "</li>";
    })
    .join("");
  // recupère toute les <li>
  listContainer.querySelectorAll("li").forEach((element) => {
    const selectTagsId = document.querySelector("#selected-tags");

    // Event au click d'une li, ajout d'un tag

    element.addEventListener("click", () => {
      const createTags = document.createElement("button");
      selectTagsId.appendChild(createTags);

      //  ajoute une condition, si mes éléments, sont séléctionné :
      // on les ajoutes dans un tag, et on les supprimes de ma liste
      listElementsSelected.push(element.innerText);
      // retire les élément du tableau
      // listElements.splice(0, 1);
      // //maintenant supprime les éléments de la liste
      // element.remove();
      // maintenant renvoi ces élements
      // dans un tag qui s'iplémentera au dessus
      createTags.innerHTML =
        element.innerText + "<i class='far fa-times-circle ml-2'></i>";
      createTags.addEventListener("click", () => {
        createTags.remove();
        // console.log(listElementsSelected);
        // console.log(createTags.innerText);
        listElementsSelected = listElementsSelected.filter((item) => {
          return item != createTags.innerText;
        });
        displayList(listContainer, listElements, search, listElementsSelected);
      });

      displayList(listContainer, listElements, search, listElementsSelected);
      console.log(listElementsSelected);
      console.log(listElements);
    });
  });

  // listContainer.innerHTML = listElements
  // .filter((element) => {
  //   // console.log(element);
  //   return element.includes(e.target.value);
  // })
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

  initTheContainer(
    ingredientsBtnTag,
    ingredientContainer,
    ingredientsArray,
    selectedIngredients
  );
  initTheContainer(
    appliancesBtnTag,
    appareilsContainer,
    applianceArray,
    selectedAppareils
  );
  initTheContainer(
    utensilsBtnTag,
    utensilsContainer,
    ustensilsArray,
    selectedUstensils
  );

  // SEARCH ALGO
  // searchAlgorithme(ingredientsBtnTag, appliancesBtnTag, utensilsBtnTag);

  closeTheContainer();
  return;
}
dropDownContainer();
