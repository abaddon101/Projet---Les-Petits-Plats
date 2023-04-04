//////////////////////////// SEARCH ALGO VERSION 1 ////////////////////////////
export function searchAlgorithme() {
    // modification de l'input barre de recherche
    // recherche par barre de recherche par 3  caractères grâce à une regexp
    // s'actualise pour chaque nouveau caractère
    // faire une recherche par name
    const searchInputBar = document.querySelector("#search-input");
  
    searchInputBar.addEventListener("change", function () {
      console.log("SearchBar Modifié");
    });
  
    // selection des listes
  // faire une recherche par ingredients
    const searchInputBarIngredient = document.querySelector(
      "#ingredients-tag-input"
    );
    // faire une recherche par appliance
    const searchInputBarAppliances = document.querySelector(
      "#appliances-tag-input"
    );
    // faire une recherche par ustensils
    const searchInputBarUstensil = document.querySelector("#utensils-tag-input");
    // recherche par filtres/tags
    // les champs ingrédients, ustensils, et appareils
    // s'actualise pour chaque nouveau caractère
    // proposent seulement les éléments restants
    // les retours de recherche doivent être une intersection des résultats,
    // si on ajoute tags coco et chocolat on doit récupérer les rectte ayant coco et chocolat
  }