export class Animal {
  constructor(public name: string) {}
  move() {
    console.log('Moving along');
  }

  greeting() {
    return "hi i'm " + this.name;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
}

const fifi = new Animal('fifi');

fifi.move();
console.log(fifi.greeting());

const chels = new Dog('chels', 'I');

chels.move();
console.log(chels.greeting());
chels.woof(3);
console.log(chels.owner);
