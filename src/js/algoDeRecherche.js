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

// import { recipes } from "../data/recipes.js";
export function searchAlgo() {
  const searchBar = document.querySelector("#search-input");

  searchBar.addEventListener("input", (e) => {
    updateSearch();
  });
}

function updateSearch() {
  const searchBar = document.querySelector("#search-input");
  const cards = Array.from(document.querySelectorAll(".card"));
  const searchTags = window.search;

  const words = searchBar.value.toLowerCase().trim().split(" ");

  const filteredRecipes = cards.filter((card) => {
    console.log(card);
    // Vérifie si la recette correspond à tous les mots clés
    const matchedKeywords = words.filter((word) => {
      console.log(word);
      return (
        card.textContent.toLowerCase().includes(word) ||
        card.dataset.appliance.toLowerCase().includes(word) ||
        card.dataset.ustensils.toLowerCase().includes(word) ||
        card.dataset.ingredients.toLowerCase().includes(word)
      );
    });

    // Vérifie si la recette correspond à tous les tags de recherche
    const matchedTags =
      searchTags.ingredients.every((ingredient) =>
        // console.log(ingredient)
        card.dataset.ingredients
          .toLowerCase()
          .includes(ingredient.toLowerCase())
      ) &&
      searchTags.appareils.every((appareil) =>
        // console.log(appareil)
        card.dataset.appliance.toLowerCase().includes(appareil.toLowerCase())
      ) &&
      searchTags.ustensils.every((ustensil) =>
        // console.log(ustensils)
        card.dataset.ustensils.toLowerCase().includes(ustensil.toLowerCase())
      );

    return matchedKeywords.length === words.length && matchedTags;
  });

  cards.forEach((card) => {
    if (filteredRecipes.includes(card)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchAlgo();
window.updateSearch = updateSearch;
