// //////////////////////////// SEARCH ALGO VERSION 1 ////////////////////////////
// import { recipes } from "../data/recipes.js";

// let ingredientTags = [];
// // recupère toute mes recettes
// recipes.forEach((recipe) => {
//   // console.log(recipe);
//   // recupère tout mes ingrédients présent dans mes {}
//   recipe.ingredients.forEach(({ ingredient }) => {
//     console.log(ingredient);
//     const wordingredient =
//       // recupère le premier caractère de la chaine et le met en maj
//       ingredient.charAt(0).toUpperCase() +
//       // ensuite, permet d'accéder au reste des caractère de la chaine
//       // en faisant ommencer au deuxième caractère
//       ingredient.substring(1).toLowerCase();
//     // si mon tableau inclu la constante wordIngredient, alors on push le tableau
//     if (!ingredientTags.includes(wordingredient)) {
//       ingredientTags.push(wordingredient);
//     }
//   });
// });

// const table = [ingredientTags];
// // mon tableau recupère tout les noms des ingrédients
// console.log(table);


// export function searchAlgorithme(ingredients, appareil, ustensils) {

//   const searchInputBar = document.querySelector("#search-input");

//   searchInputBar.addEventListener("change", function () {
//     console.log("SearchBar Modifié");
//   });
//   // au clic de mes éléments, lance la fonction selectTags
//   // => afficher les tags séléctionnés



//   // selection des listes
//   // faire une recherche par ingredients
//   const searchInputBarIngredient = document.querySelector(
//     "#ingredients-tag-input"
//   );
//   // faire une recherche par appliance
//   const searchInputBarAppliances = document.querySelector(
//     "#appliances-tag-input"
//   );
//   // faire une recherche par ustensils
//   const searchInputBarUstensil = document.querySelector("#utensils-tag-input");
//   // recherche par filtres/tags
//   // les champs ingrédients, ustensils, et appareils
//   // s'actualise pour chaque nouveau caractère
//   // proposent seulement les éléments restants
//   // les retours de recherche doivent être une intersection des résultats,
//   // si on ajoute tags coco et chocolat on doit récupérer les rectte ayant coco et chocolat
// }
