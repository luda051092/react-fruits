import fruits from './fruits';
import { choice, remove } from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious, may I have another?`);

let remaining = remove(fruit, fruits);

console.log(`I'm sorry, we're all out of that. We have ${remaining.length} left`);