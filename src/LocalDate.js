import moment from "moment";

export class LocalDate {
  value = 0;
  serializeToJava = true;

  constructor(valueOrYear, month, day) {
    this.value =
      month !== undefined
        ? moment.utc({ year: valueOrYear, month: month - 1, day }).valueOf()
        : valueOrYear;
  }

  toString() {
    return this.toMomentUTC().format("YYYY-MM-DD");
  }

  toJSDate() {
    // będzie w lokalnej strefie
    const date = new Date(Date.parse(this.toString() + " 00:00"));
    console.log("toJSDate :", date);
    return date;
  }

  /**
   * Oddaje jako moment.
   * Ze względu na sposób reprezentacji, będzie to ta data 00:00 w strefie UTC
   */
  toMomentUTC() {
    return moment.utc(this.value);
  }

  static fromJSDate(date) {
    console.log("fromJSDate", date);
    return new LocalDate(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    );
  }
}

export default LocalDate;
