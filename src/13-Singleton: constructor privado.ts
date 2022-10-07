export class MyService {
  private static instace: MyService | null = null;

  private constructor(public name: string) {}

  static cerate(name: string) {
    if (!MyService.instace) {
      this.instace = new MyService(name);
    }
    return this.instace;
  }
}

const service1 = MyService.cerate('service1');
console.log(service1);

const service2 = MyService.cerate('service2');
console.log(service2);

console.log(service1 === service2);
