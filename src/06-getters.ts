export class MyDate {
  constructor(public year: number = 1993, public month: number = 7, private _day: number = 9) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear (): boolean {
    const { year } = this;
    if (year % 4 === 0) return false;
    if (year % 100 === 0) return true;
    return year % 4 === 0;
}
}

const myDate = new MyDate(2020);
const myDate2 = new MyDate(2000);
const myDate3 = new MyDate(2001);
const myDate4 = new MyDate(2004);

myDate.day;
console.log('My Date:',myDate.day, myDate.isLeapYear);
console.log('My Date 2:',myDate2.day, myDate2.isLeapYear);
console.log('My Date 3:',myDate3.day, myDate3.isLeapYear);
console.log('My Date 4:',myDate4.day, myDate4.isLeapYear);