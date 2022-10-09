import { Dog } from './09-Acceso-protegido';

// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: string| number) {
//   return value;
// }

function getValue<T>(value: T) {
  const array: T[] = [value];

  return value;
}

getValue<number>(12).toString();
getValue<string>('12').concat('');
getValue<[string]>(['12']).length;

const fifi = new Dog('fifi', 'yo');
getValue<Dog>(fifi).move();
