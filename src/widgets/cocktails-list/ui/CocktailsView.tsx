import styles from '@widgets/cocktails-list/ui/Coctails.module.scss';
import { DrinkCard } from '@entities/cocktail-card/ui';
import { DrinkViewModel } from '@entities/cocktail-card/model/DrinkViewModel.ts';
import { Loader } from '@shared/ui';

interface PropTypes {
  drinks: DrinkViewModel[];
  isLoading: boolean;
}

const CocktailsView = ({ drinks, isLoading }: PropTypes) => {
  return (
    <div className={styles.cocktailsList}>
      {isLoading && <Loader />}
      {drinks?.length === 0 && <span>The list is empty, try another category.</span>}
      {drinks?.map((drink) => (
        <DrinkCard
          key={drink.id}
          name={drink.name}
          alcoholic={drink.alcoholic}
          category={drink.category}
          glass={drink.glass}
          institutions={drink.institutions}
          ingredients={drink.ingredients}
          measures={drink.measures}
          imageUrl={drink.imageUrl}
        />
      ))}
    </div>
  );
};

export default CocktailsView;
