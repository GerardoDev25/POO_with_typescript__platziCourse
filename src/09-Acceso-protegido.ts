export class Animal {
  constructor(protected name: string) {}
  move() {
    console.log('Moving along');
  }

  greeting() {
    return "hi i'm " + this.name;
  }
  protected doSomeThing() {
    console.log('done');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    // this.doSomeThing()
    for (let index = 0; index < times; index++) {
      console.log('woof: ' + this.name);
    }
  }

  move() {
    console.log('moving as a dog');
    super.move();
  }
}

// const fifi = new Animal('fifi');

// fifi.move();
// console.log(fifi.greeting());

const chels = new Dog('chels', 'I');

// console.log(chels.greeting());
// console.log(chels.owner);
// chels.name = '45';
chels.woof(1);
chels.move();
