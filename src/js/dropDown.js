import { recipes } from "../data/recipes.js";

// Création de 3 tableaux: Ingrédients, Appareil & Ustensils
// Qui seront apellés dans la dropDownContainer
// Qui apellera les fonctions initContainer
const selectedIngredients = [];
const selectedAppareils = [];
const selectedUstensils = [];
window.search = {
  ingredients: selectedIngredients,
  appareils: selectedAppareils,
  ustensils: selectedUstensils,
};
// getAvailableList est utilisé pour obtenir la liste des ingrédients disponibles
// à partir des cartes visibles dans le document.
// Cette liste est apellé dans displayList pour afficher les options
// de sélection dans une interface utilisateur.
function getAvailableList(type) {
  // selectionne tout les elements html,
  const cards = document.querySelectorAll(".card");
  // console.log(type);
  // les filtres en retournant un tableau contenant uniquement les cartes visibles
  return (
    Array.from(cards)
      .filter((card) => {
        // console.log(card.style.display);
        return card.style.display !== "none";
      })
      // transforme chaque carte en extrayant les données du params (type)
      .map((card) => {
        return card.dataset[type].split(",");
      })
      // Reduit le tableau obtenu à l'étape précédente en un seul tableau
      // Cela concatène tous les tableaux de données en un seul tableau
      .reduce((result, cardIngredients) => {
        return result.concat(cardIngredients);
      }, [])
      // Transforme chaque élément du tableau en convertissant les ingrédients en minuscules
      .map((ingredient) => {
        // ajout d'une balise pour créer le lien
        return ingredient.toLowerCase();
      })
      // Filtre les ingrédients en supprimant les doublons
      // Cela garde uniquement le premier occurrence de chaque ingrédient dans la liste
      .filter((ingredient, index, ingredientList) => {
        // console.log(ingredient);
        // console.log(index);
        // console.log(ingredientList);

        // récupère l'index de l'ingrédient actuellement dans la liste
        // Si l'index est différent de mon element actuel,
        // j'ai au moins un autre élément avec le même nom
        // indexOf recupère le premier element de ma liste

        // Le résultat final est le tableau des ingrédients disponibles,
        // qui est renvoyé par la fonction.
        return ingredientList.indexOf(ingredient) == index;
      })
  );
  // Le code est utilisé pour obtenir la liste des ingrédients disponibles
  // à partir des cartes visibles dans le document.
  // Cette liste est utilisée ultérieurement dans d'autres parties
  // du code pour afficher les options de sélection dans une interface utilisateur.
}

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
function initTheContainer(
  btn,
  container,
  listElementsKey,
  listElementsSelected
) {
  // console.log(listElementsKey);
  //les tableaux sont vides jusqu'a çe qu'on les exploite
  // console.log(container);
  const listContainer = container.querySelector(".dropdown-choices");
  // console.log(listContainer);
  const inputSearch = container.querySelector(".tag-search-input");
  const selectTagsId = document.querySelector("#selected-tags");
  const createTags = document.createElement("button");
  createTags.className = "tags";
  // Event au click, ouverture des différents dropdown
  btn.addEventListener("click", (e) => {
    // console.log("dropdown ouvert");
    container.classList.add("show");
    // met à jour l'affichage au click
    displayList(listContainer, listElementsKey, "", listElementsSelected);
  });
  inputSearch.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    // met à jour l'affichage si on ecrit qqch dans l'input
    displayList(
      listContainer,
      listElementsKey,
      e.target.value,
      listElementsSelected
    );
  });
  // initialise l'affichage initial de la liste des éléments selectionnable,
  // sans filtre de recherche
  displayList(listContainer, listElementsKey, "", listElementsSelected);
}
// gère l'actualisation du contenu HTML d'un conteneur spécifique
// avec la liste des éléments disponibles en fonction des critères
// de recherche et des éléments déjà sélectionnés.
// Cela permet de mettre à jour dynamiquement les options de sélection
// affichées dans les menus déroulants en fonction des actions de l'utilisateur.
function displayList(
  listContainer,
  listElementsKey,
  search,
  listElementsSelected
) {
  // console.log(listElementsSelected);
  // La fonction getAvailableList est appelée à cet endroit
  // pour obtenir la liste des éléments disponibles à afficher
  // dans le conteneur listContainer.
  listContainer.innerHTML = getAvailableList(listElementsKey)
    // getAvailableList(listElementsKey) est appelé
    // pour obtenir la liste des éléments disponibles
    // correspondant à la clé listElementsKey.
    .filter((element) => {
      // La méthode indexOf renvoie le premier index auquel un élément donné peut être trouvé
      // Dans le tableau, ou -1 s'il n'est pas présent
      // Permet  à la selection d'un li, de le retirer du dropdown

      // Si l'élément est déjà sélectionné
      // (c'est-à-dire qu'il existe dans listElementsSelected),
      // il est exclu en retournant false.
      if (listElementsSelected.indexOf(element) != -1) {
        return false;
      }
      // Si l'élément correspond à la recherche en cours
      // (c'est-à-dire qu'il contient le texte de recherche spécifié par search),
      // il est inclus en retournant le tableau avec tout les li
      return element.includes(search);
    })
    // le tableau filtré est transformé en une chaîne de balises
    .map((element) => {
      return "<li>" + element + "</li>";
    })
    //  les balises <li> sont concaténées en une seule chaîne
    .join("");

  // recupère toute les <li>
  listContainer.querySelectorAll("li").forEach((element) => {
    const selectTagsId = document.querySelector("#selected-tags");
    // console.log(listContainer.id);

    // Event au click d'une li, ajout d'un tag
    element.addEventListener("click", () => {
      const createTags = document.createElement("button");
      // console.log(element.innerText);

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
      // gère la suppression d'un élément sélectionné (tag)
      // lorsque l'utilisateur clique sur le bouton correspondant.
      // Met également à jour les résultats de recherche et l'affichage en conséquence.
      createTags.addEventListener("click", () => {
        // supprime l'élément createTags du DOM,
        createTags.remove();
        // recherche l'indice de l'élément correspondant à createTags.innerText
        // dans le tableau listElementsSelected.
        // Cela permet de déterminer la position de l'élément dans le tableau.
        const indexOfTag = listElementsSelected.indexOf(createTags.innerText);
        // console.log(indexOfTag);
        //  vérifie si l'indice de l'élément est trouvé dans le tableau listElementsSelected
        // (c'est-à-dire que l'élément est présent dans le tableau).
        //Si oui, alors listElementsSelected.splice(indexOfTag, 1)
        // est utilisé pour supprimer cet élément du tableau.
        if (indexOfTag >= 0) {
          listElementsSelected.splice(indexOfTag, 1);
        }
        // mets à jour les résultats de recherche
        // en fonction des éléments sélectionnés et des critères de recherche spécifiques.
        //permet d'informer l'environement que des modifications ont été apportées
        // a la liste d'élements sélectionné
        // => déclenche une mis à jour des résultats de recherche affichés
        window.updateSearch();
        displayList(
          listContainer,
          listElementsKey,
          search,
          listElementsSelected
        );
      });
      // À chaque appel de displayList(),
      // mettre à jour les résultats de recherche
      // updateSearch() est appelé pour effectuer cette mise à jour.
      window.updateSearch();
      displayList(listContainer, listElementsKey, search, listElementsSelected);
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
// dropDownContainer organise et initialise les conteneurs de menus déroulants
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
  // appel 3x initTheContainer pour  initialiser
  // chaque conteneur de menu déroulant avec les paramètres appropriés
  initTheContainer(
    ingredientsBtnTag,
    ingredientContainer,
    "ingredients",
    selectedIngredients
  );
  initTheContainer(
    appliancesBtnTag,
    appareilsContainer,
    "appliance",
    selectedAppareils
  );
  initTheContainer(
    utensilsBtnTag,
    utensilsContainer,
    "ustensils",
    selectedUstensils
  );
  closeTheContainer();
  return;
}
dropDownContainer();
