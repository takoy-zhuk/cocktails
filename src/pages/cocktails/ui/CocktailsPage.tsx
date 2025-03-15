import { Cocktails } from '@widgets/cocktails-list';
import { CocktailCode } from '@widgets/cocktails-list/api/types.ts';
import { Error } from '@widgets/error';

interface PropTypes {
  cocktailCode: CocktailCode;
}

const CocktailsPage = ({ cocktailCode }: PropTypes) => {
  return <Cocktails cocktailCode={cocktailCode} renderError={(props) => <Error {...props} />} />;
};

export default CocktailsPage;
