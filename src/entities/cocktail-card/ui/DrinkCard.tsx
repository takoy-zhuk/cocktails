import styles from './DrinkCard.module.scss';

interface PropType {
  name: string;
  category: string;
  alcoholic: string;
  glass: string;
  institutions: string;
  imageUrl: string;
  ingredients: string[];
  measures: string[];
}

const DrinkCard = ({
  alcoholic,
  category,
  glass,
  ingredients,
  institutions,
  name,
  imageUrl,
  measures,
}: PropType) => {
  return (
    <div className={styles.drinkCard}>
      <div className={styles.info}>
        <h2 className={styles.drinkName}>{name}</h2>
        <div className={styles.description}>
          <div>{category}</div>
          <div>{alcoholic}</div>
          <div>{glass}</div>
        </div>
        <div className={styles.instructions}>
          <h4>Instructions:</h4>
          <div>{institutions}</div>
        </div>

        <div className={styles.ingredientsBlock}>
          <h4>List of ingredients:</h4>
          <div className={styles.ingredients}>
            <div>
              {measures.map((measure, index) => (
                <div key={index}>{measure}</div>
              ))}
            </div>
            <div>
              {ingredients.map((ingredient, index) => (
                <div key={index}>{ingredient}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageBlock}>
        <img src={imageUrl} alt='Alcohol image' loading='lazy' />
      </div>
    </div>
  );
};

export default DrinkCard;
