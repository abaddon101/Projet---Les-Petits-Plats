// Solution
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

// import { recipes } from "../data/recipes.js";

export function searchAlgo() {
  // On commence par récupérer l'élément HTML de la barre de recherche
  const searchBar = document.querySelector("#search-input");
  // console.log("searchAlgo");
  // On ajoute un évènement de type "input" sur la barre de recherche
  searchBar.addEventListener("input", (e) => {
    const searchValue = searchBar.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    filterElement(searchValue, cards);
  });
}
function filterElement(searchValue, cards) {
  const filteredRecipes = Array.from(cards).filter((recipe) => {
    if (searchValue.length < 3) {
      return true;
    }
    const recipeName = recipe
      .querySelector(".card-title")
      .textContent.toLowerCase();
    return recipeName.includes(searchValue);
  });

  Array.from(cards).forEach((recipe) => {
    if (filteredRecipes.includes(recipe)) {
      recipe.style.display = "block";
    } else {
      recipe.style.display = "none";
    }
  });
}
searchAlgo();

// La fonction searchAlgo sera appelée à chaque fois que l'utilisateur entrera quelque chose dans la barre de recherche
// function filterElement() {
//   // // On récupère la valeur de la barre de recherche
//   // const searchValue = searchBar.value.toLowerCase();

//   // // On sélectionne tous les éléments HTML correspondant aux recettes
//   // const cards = document.querySelectorAll(".recipe");

//   // On utilise la méthode filter() pour ne garder que les recettes dont le nom contient la valeur de la barre de recherche
//   const filteredRecipes = Array.from(cards).filter((recipe) => {
//     const recipeName = recipe
//       .querySelector(".card-title")
//       .textContent.toLowerCase();
//     return recipeName.includes(searchValue);
//   });

//   // On utilise la méthode forEach() pour afficher ou masquer les recettes correspondantes en fonction de la valeur de la barre de recherche
//   Array.from(cards).forEach((recipe) => {
//     if (filteredRecipes.includes(recipe)) {
//       recipe.style.display = "block";
//     } else {
//       recipe.style.display = "none";
//     }
//   });
// }
