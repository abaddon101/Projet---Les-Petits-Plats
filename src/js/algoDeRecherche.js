// Solution 2
export function searchAlgo() {
  const searchBar = document.querySelector("#search-input");

  searchBar.addEventListener("input", (e) => {
    if (searchBar.value.length >= 3 || searchBar.value.length <= 2) {
      updateSearch();
    }
  });
}
function updateSearch() {
  const searchBar = document.querySelector("#search-input");
  const cards = Array.from(document.querySelectorAll(".card"));
  // Tags de recherche (ingrédients, appareils, ustensiles) récupérés à partir de la variable globale window.search.
  const searchTags = window.search;
  // Valeur de la barre de recherche récupérée, mise en minuscule, décomposée en un tableau de mots-clés (en supprimant les espaces vides),
  // puis stockée dans la variable words.
  const words = searchBar.value.toLowerCase().trim().split(" ");

  const filteredRecipes = cards.filter((card) => {
    // console.log(card);
    // Vérifie si la recette correspond à tous les mots clés
    const matchedKeywords = words.filter((word) => {
      // console.log(word);
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
  // Affichage du message d'erreur si aucune recette n'est trouvée
  const errorElement = document.querySelector("#search-error");
  if (filteredRecipes.length === 0) {
    errorElement.style.display = "block";
    errorElement.innerHTML = `Aucune recette ne correspond à votre critère…
    vous pouvez chercher « tarte aux pommes »,
     « poisson », etc.`;
  } else {
    errorElement.style.display = "none";
  }
}

searchAlgo();
window.updateSearch = updateSearch;
