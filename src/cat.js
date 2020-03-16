export class Cattio {
  constructor(height, weight, hasClaws) {
    this.height = height;
    this.weight = weight;
    this.hasClaws = hasClaws;
  }

  static catDangerLevel(aCat) {
    if(aCat.hasClaws) {
      return 'Danger level 100'
    }
    return 'Danger level 10'
  }
}
