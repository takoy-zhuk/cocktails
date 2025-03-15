export class DrinkViewModel {
  id: string;
  name: string;
  category: string;
  alcoholic: string;
  glass: string;
  institutions: string;
  imageUrl: string;
  ingredients: string[];
  measures: string[];

  constructor({ id, name, category, alcoholic, glass, institutions, imageUrl, ingredients, measures }: DrinkViewModel) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.alcoholic = alcoholic;
    this.glass = glass;
    this.institutions = institutions;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.measures = measures;
  }
}
