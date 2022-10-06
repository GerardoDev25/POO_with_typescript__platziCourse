export class MyDate {
  constructor(public year: number = 1993, private _month: number = 7, private _day: number = 9) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get month() {
    return this._month;
  }

  get isLeapYear(): boolean {
    const { year } = this;
    if (year % 4 === 0) return false;
    if (year % 100 === 0) return true;
    return year % 4 === 0;
  }

  set month(newValue: number) {
    if (newValue >= 0 && newValue <= 11) {
      this._month = newValue;
    } else throw new Error('month out of range');
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());

myDate.month = 6;
console.log(myDate.month);
