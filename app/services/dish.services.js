import angular from 'angular';

class Dish {
  constructor() {
    this.dishes = [
      { name: 'Galette-saucisse', type: 'Plat principal', image: 'images/1.jpg', tastiness: 'yummy' },
      { name: 'Kig ha farz',      type: 'Plat principal', image: 'images/5.jpg', tastiness: 'berk' },
      { name: 'Kouign-amann',     type: 'Dessert',        image: 'images/4.jpg', tastiness: 'yummy' },
      { name: 'Far breton',       type: 'Dessert',        image: 'images/2.jpg', tastiness: 'slurp' },
      { name: 'Crêpes',           type: 'Dessert',        image: 'images/3.jpg', tastiness: 'yummy' }
    ];
  }

  getList() {
    return this.dishes;
  }
}

export default angular.module('services.dish', [])
  .service('dish', Dish)
  .name;
