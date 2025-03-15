import { Drink } from '@widgets/cocktails-list/api/types.ts';
import { DrinkViewModel } from '@entities/cocktail-card';

export const drinksMapper = (drinks: Drink[], maxIngredientsCount = 15) => {
  const result = drinks.map((drink) => {
    const measures: string[] = [];
    const ingredients: string[] = [];

    for (let i = 1; i <= maxIngredientsCount; i++) {
      const measure = drink[`strMeasure${i}`];
      const ingredient = drink[`strIngredient${i}`];

      if (ingredient && typeof ingredient === 'string') {
        ingredients.push(ingredient);
      }
      if (measure && typeof measure === 'string') {
        measures.push(measure);
      }
    }

    return new DrinkViewModel({
      id: drink.idDrink,
      alcoholic: drink.strAlcoholic,
      category: drink.strCategory,
      glass: drink.strGlass,
      imageUrl: drink.strDrinkThumb,
      name: drink.strDrink,
      institutions: drink.strInstructions,
      ingredients: ingredients,
      measures: measures,
    });
  });
  return result;
};
