import { makeAutoObservable, observable, runInAction } from 'mobx';
import { CocktailCode } from '@widgets/cocktails-list/api/types.ts';
import { getCocktails } from '@widgets/cocktails-list/api/getCocktails.ts';
import { DrinkViewModel } from '@entities/cocktail-card';
import { drinksMapper } from '@widgets/cocktails-list/lib/drinksMapper.ts';

const MAX_INGREDIENTS_COUNT = 15;
const CACHE_TIME = 3 * 60 * 1000;

class CocktailStore {
  @observable
  drinks: { [key: string]: DrinkViewModel[] } = {};

  @observable
  isLoading: boolean = false;

  @observable
  error: string = '';

  private lastUpdated: { [key: string]: number | null } = {};

  constructor() {
    makeAutoObservable(this);
  }

  getCocktails = async (cocktailCode: CocktailCode) => {
    const now = Date.now();

    if (
      Array.isArray(this.drinks[cocktailCode]) &&
      this.drinks[cocktailCode].length > 0 &&
      typeof this.lastUpdated[cocktailCode] === 'number' &&
      now - this.lastUpdated[cocktailCode] < CACHE_TIME
    ) {
      return;
    }

    try {
      this.isLoading = true;
      this.error = '';
      const response = await getCocktails({ cocktailCode: cocktailCode });
      const data = drinksMapper(response.data.drinks, MAX_INGREDIENTS_COUNT);
      runInAction(() => {
        this.isLoading = false;
        this.drinks[cocktailCode] = data;
        this.lastUpdated[cocktailCode] = Date.now();
      });
    } catch {
      runInAction(() => {
        this.isLoading = false;
        this.error = 'Something went wrong';
      });
    }
  };

  refreshCocktails = async (cocktailCode: CocktailCode) => {
    this.clearDrink(cocktailCode);
    this.getCocktails(cocktailCode);
  };

  private clearDrink = (cocktailCode: CocktailCode) => {
    delete this.drinks[cocktailCode];
  };
}

export default new CocktailStore();
