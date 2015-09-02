export default class CuisineController {
  constructor(dish) {
    this.name = 'Cuisine';
    this.dish = dish;
  }

  loadData() {
    this.dishes = this.dish.getList();
  }
  resetData() {
    this.dishes = null;
  }
}
