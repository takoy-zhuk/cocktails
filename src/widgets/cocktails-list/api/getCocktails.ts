import { Drink, QueryParams } from '@widgets/cocktails-list/api/types.ts';
import httpClient from '@shared/api/http-client/httpClient.ts';

export const getCocktails = (params: QueryParams) =>
  httpClient.get<{ drinks: Drink[] }>(`1/search.php?s=${params.cocktailCode}`);
