class Doggio {
  constructor(height, weight, name) {
    this.height = height;
    this.weight = weight;
    this.name = name;
  }

  woof() {
    return `${this.name} says WOOF!`
  }

  set updateWeight(newWeight) {
    this.weight = newWeight
    return this.weight
  }

  get currentHeight() {
    return `This doggio is ${this.height}in tall`
  }

}

export default class Chihuaha extends Doggio {
  constructor(height, weight, name) {
    super(height, weight, name)
  }

  speaksEspanol() {
    return `${this.name} says, "Yo quiero Taco Bell"`
  }
}

export { Doggio }
