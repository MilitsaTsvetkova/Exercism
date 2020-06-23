//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minutes = 0) {
    this.clockDate = new Date(0, 0, 0, hour, minutes);
    this.clockHands = {
      hourHand: this.clockDate.getHours(),
      minuteHand: this.clockDate.getMinutes()
    }
  }
  toString() {
    return this.clockDate.toTimeString().slice(0, 5);
  }

  plus(minutes) {
    return new Clock(this.clockHands.hourHand, this.clockHands.minuteHand + minutes);
  }

  minus(minutes) {
    return new Clock(this.clockHands.hourHand, this.clockHands.minuteHand - minutes);
  }

  equals(clock) {
    return this.clockHands.hourHand === clock.clockHands.hourHand
      && this.clockHands.minuteHand === clock.clockHands.minuteHand;
  }
}
