export class Utils {
  static random(from: number, to: number) {
    return Math.floor(Math.random() * (to - from)) + from;
  }

  static currentDateString() {
    const date = new Date();
    const currentDateString = date.toLocaleDateString("he-IL", {
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      fractionalSecondDigits: 3,
    });
    return currentDateString;
  }
}
