import { Dog, Cat } from './animals'
import Chihuaha from './dog'

console.log('a static method', Cat.catDangerLevel({hasClaws: true}))
const queso = new Chihuaha(10, 10, 'Queso');
console.log('demo of inheritance', queso.speaksEspanol());
console.log('a getter', queso.currentHeight);
console.log('a setter', queso.updateWeight = 20)

console.log(Chihuaha)
