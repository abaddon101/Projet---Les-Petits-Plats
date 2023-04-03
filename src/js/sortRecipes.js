/// Sort medias
import { recipes } from "../data/recipes.js";

export function sortRecipes(sortBy) {
  if (sortBy === "ingredients") {
    recipesArray.sort((a, b) => b.appliance - a.appliance);
  }
  if (sortBy === "appliance") {
    recipesArray.sort((a, b) => {
      /// new Date allow to transform a date in a string for better facilities to sort
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
  }
  if (sortBy === "ustensils") {
    recipesArray.sort((a, b) => {
      /// toLowerCase don't care and don't take maj or min for the sort of the strings
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
  }
}
