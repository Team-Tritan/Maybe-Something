class MaybeSomething {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return this.value
      ? MaybeSomething.of(fn(this.value))
      : MaybeSomething.of(null);
  }

  static of(value) {
    return new MaybeSomething(value);
  }
}

module.exports = MaybeSomething;
