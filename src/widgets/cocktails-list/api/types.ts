export type Drink = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  [key: string]: unknown;
};

export const COCKTAIL_CODE = {
  margarita: 'margarita',
  mojito: 'mojito',
  a1: 'a1',
  kir: 'kir',
} as const;

export type CocktailCode = (typeof COCKTAIL_CODE)[keyof typeof COCKTAIL_CODE];

export type QueryParams = {
  cocktailCode: CocktailCode;
};
