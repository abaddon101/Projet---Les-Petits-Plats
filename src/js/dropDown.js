import { recipes } from "../data/recipes.js";
// import { searchAlgo } from "./AlgoRecherche1.js";
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
  //les tableaux sont vides jusqu'a çe qu'on les exploite
  console.log(container);
  const listContainer = container.querySelector(".dropdown-choices");
  console.log(listContainer);
  const inputSearch = container.querySelector(".tag-search-input");
  const selectTagsId = document.querySelector("#selected-tags");
  const createTags = document.createElement("button");
  createTags.className = "tags";
  // Event au click, ouverture des différents dropdown
  btn.addEventListener("click", (e) => {
    container.classList.add("show");
  });
  inputSearch.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    displayList(
      listContainer,
      listElements,
      e.target.value,
      listElementsSelected
    );
  });

  displayList(listContainer, listElements, "", listElementsSelected);
}

function displayList(
  listContainer,
  listElements,
  search,
  listElementsSelected
) {
  // console.log(listElements);
  listContainer.innerHTML = listElements
    .filter((element) => {
      // console.log(element);
      // La méthode indexOf renvoie le premier index auquel un élément donné peut être trouvé
      // Dans le tableau, ou -1 s'il n'est pas présent
      // Permet  à la selection d'un li, de le retirer du dropdown
      if (listElementsSelected.indexOf(element) != -1) {
        return false;
      }
      // retourne le tableau avec tout les li
      return element.includes(search);
    })
    .map((element) => {
      return "<li>" + element + "</li>";
    })
    .join("");
  // recupère toute les <li>
  listContainer.querySelectorAll("li").forEach((element) => {
    const selectTagsId = document.querySelector("#selected-tags");
    // console.log(listContainer.id);

    // Event au click d'une li, ajout d'un tag
    element.addEventListener("click", () => {
      const createTags = document.createElement("button");
      console.log(element.innerText);

      selectTagsId.appendChild(createTags);
      createTags.className = "btnTag";
      listElementsSelected.push(element.innerText);
      createTags.innerHTML =
        element.innerText + "<i class='far fa-times-circle ml-2'></i>";

      if (listContainer.id === "ingredients-dropdown") {
        createTags.style.backgroundColor = "#0b5ed7";
        createTags.style.color = "white";
        // console.log(element.innerText + " est un " + "ingrédient");
      }
      if (listContainer.id === "appliances-dropdown") {
        createTags.style.backgroundColor = "#00a881";
        createTags.style.color = "white";
        // console.log(element.innerText + " est un " + "appareil");
      }
      if (listContainer.id === "utensils-dropdown") {
        createTags.style.backgroundColor = "#ff5a47";
        createTags.style.color = "white";
        // console.log(element.innerText + " est un " + "ustensil");
      }

      createTags.addEventListener("click", () => {
        createTags.remove();
        listElementsSelected = listElementsSelected.filter((item) => {
          return item != createTags.innerText;
        });
        displayList(listContainer, listElements, search, listElementsSelected);
      });
      displayList(listContainer, listElements, search, listElementsSelected);
    });
  });
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
  closeTheContainer();
  // searchAlgo();
  return;
}
dropDownContainer();
