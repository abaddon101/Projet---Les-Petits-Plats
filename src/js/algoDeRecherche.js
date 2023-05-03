// Solution 1
// Comment trier/filter mes listes de recettes ?

// Qu'est ce que je dois stocker comme élément à trier ?
// ==> Dans la searchBar principale, je vais vais stocker, les titres et le mot clé de description
// je veux que ma recherche se fasse de la manière suivante :

// 1- Une barre principale permettant de rechercher des mots ou groupes de lettres
// dans le titre, les ingrédients ou la description.
//2 – Recherche par mots clés dans les ingrédients, les ustensiles ou les appareils
// la recherche va s'effectuer avec les boucles natives (while, for...)

// 1. Le cas d’utilisation commence lorsque l’utilisateur entre au moins 3 caractères dans la
// barre de recherche principale.
// 2. Le système recherche des recettes correspondant à l’entrée utilisateur dans : le titre de
// la recette, la liste des ingrédients de la recette, la description de la recette.
// 3. L’interface est actualisée avec les résultats de recherche
// 4. Les champs de recherche avancée sont actualisés avec les informations ingrédients,
// ustensiles, appareil des différentes recettes restantes
// 5. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles,
// appareil.
// 6. Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le
// champ disparaissent. Par exemple, si l’utilisateur entre “coco” dans la liste d’ingrédients,
// seuls vont rester “noix de coco” et “lait de coco”.
// 7. L’utilisateur choisit un mot clé dans le champ
// 8. Le mot clé apparaît sous forme de tag sous la recherche principale
// 9. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les
// champs de recherche avancée
// 10. L’utilisateur sélectionne une recette

// regexp pour enlever les espaces pour une recherche, " replace(/\s/g, ""); "

// ALGORITHME //Recherche

//   <partie déclarations>
// const searchBar = doxcument.querySelector("#search-input")
// const cardList = document.querySelectorAll(".card ")
// function displayRecipe( ) aura pour but d'afficher les card

//   DEBUT
//Je vais stocker toutes mes recettes dans un tableau,
// si un des mes éléments selectionné correspond à un mot clé d'une de mes recettes
// j'affiche seulement les éléments correspondant à ces mots clé, j'actualise, et je ne montre pas les autres
// Si mes élements ne correspondent pas à ma recherche, j'envoi un message d'erreur.

//       <partie instructions>

// ajouter un event à mon searchBar ("input" ou "key", displayRecipe)
// ajouter un test, une condition à ma recherche minimum de 3 caractères nécessaire pour afficher les cards
// si moins de 3 caratères, aucun affichage
// si cette condition est respecté mis en place d'une boucle.

// efface le tableau avant la boucle.

// pour chaque recette de la liste :

// on cherche à determiner si la recette correspond ou ne correspond pas
// Comment ?
// si recherche include nom recette ||
// si recherche include nom ingrédients

// a la fin de la boucle, réafficher le tableau.

// affiche les élements correspondants, n'affiche plus les autres

//   FIN

import { recipes } from "../data/recipes.js";
export function searchAlgo() {
  // récupère la barre de recherche
  const searchBar = document.querySelector("#search-input");
  // console.log("searchAlgo");
  searchBar.addEventListener("input", (e) => {
    const searchLetters = e.target.value;
    const cards = document.querySelectorAll(".card");
    // const getTheRecipe = recipes;
    // console.log(getTheRecipe);
    filterElement(searchLetters, cards);
  });

  // recupère les container des différents li
  const ingredientContainer = document.querySelector("#open-ingredient-container");
  const listContainerIngredient = ingredientContainer.querySelector(".dropdown-choices");
  addClickEventListener(ingredientContainer, listContainerIngredient);

  const appareilsContainer = document.querySelector("#open-appareils-container");
  const listContainerAppareil = appareilsContainer.querySelector(".dropdown-choices");
  addClickEventListener(appareilsContainer, listContainerAppareil);

  const utensilsContainer = document.querySelector("#open-utensils-container");
  const listContainerUtensils = utensilsContainer.querySelector(".dropdown-choices");
  addClickEventListener(utensilsContainer, listContainerUtensils);

  function addClickEventListener(container, list) {
    console.log(container);
    console.log(list);
    const listItems = list.querySelectorAll("li");
    listItems.forEach((li) => {
      li.addEventListener("click", (e) => {
        const selected = e.target.textContent.toLowerCase();
        const cards = document.querySelectorAll(".card");
        const tag = document.querySelector(".btnTag");

        filterElement(selected, cards, listItems, tag);
      });
    });
  }
}
function filterElement(searchWords, element, li, tag) {
  console.log(element);
  console.log(li);
  console.log(tag);
  // création d'un tableau qui va filtrer et envoyer des élements à l'intérieur
  let filterRecipes = [];
  console.log(filterRecipes);
  // création d'un nouveau tableau pour stocker les tags filtrés
  let filteredItems = [];
  console.log(filteredItems);
  // word est utilisé pour extraire les mots clé de la chaine de recherche
  // fournie par l'utilisateur et les uilise pour filtrer les recette en fonction de ces mots clé
  // elle stocke un tablaeu de mot clé extrait de la chaine de recherche
  const words = searchWords.toLowerCase().trim().split(" ");

  let isMatched = true;
  for (let i = 0; i < element.length; i++) {
    isMatched = true;
    if (searchWords.length < 3) {
      filterRecipes.push(element[i]);
      continue;
    }
    //  parcourt chaque mot clé contenu dans la variable "words".
    for (let word of words) {
      //Si mot clé = chaîne vide, la boucle continue avec l'itération suivante.
      if (word === "") {
        continue;
      }
      // Sinon, la fonction vérifie si l'un des quatre éléments d'une recette
      // (textContent, appliance, ustensils, et ingredients) contient le mot clé
      // Si aucun de ces éléments ne contient le mot clé,
      // alors la variable "isMatched" est définie sur false
      if (
        !element[i].textContent.toLowerCase().includes(word) &&
        !element[i].dataset.appliance.toLowerCase().includes(word) &&
        !element[i].dataset.ustensils.toLowerCase().includes(word) &&
        !element[i].dataset.ingredients.toLowerCase().includes(word)
      ) {
        isMatched = false;
      }
    }
    // Si tous les mots clés ont été vérifiés et que "isMatched" est toujours à true,
    // la recette est stockée dans un tableau nommé "filterRecipes".
    if (isMatched) {
      filterRecipes.push(element[i]);
      filteredItems.push(element[i]);
    }
  }
  //
  for (let i = 0; i < element.length; i++) {
    if (filterRecipes.includes(element[i])) {
      element[i].style.display = "block";
    } else {
      element[i].style.display = "none";
    }
  }
}

searchAlgo();
