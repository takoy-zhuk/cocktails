import { ReactNode, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { CocktailCode } from '@widgets/cocktails-list/api/types.ts';
import CocktailsView from '@widgets/cocktails-list/ui/CocktailsView.tsx';
import { cocktailStore } from '@widgets/cocktails-list/model';

interface PropTypes {
  cocktailCode: CocktailCode;
  renderError: (props: { message: string; onClick: () => void }) => ReactNode;
}

const Cocktails = observer(({ cocktailCode, renderError }: PropTypes) => {
  useEffect(() => {
    cocktailStore.getCocktails(cocktailCode);
  }, [cocktailCode]);

  const refreshRequest = () => {
    cocktailStore.refreshCocktails(cocktailCode);
  };

  if (cocktailStore.error) {
    return renderError({ message: cocktailStore.error, onClick: refreshRequest });
  }

  return <CocktailsView drinks={cocktailStore.drinks[cocktailCode]} isLoading={cocktailStore.isLoading} />;
});

export { Cocktails };
