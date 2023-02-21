## Maybe Something

Yet another useless project, brought to you by [Redacted Devs](https://tritan.gg)

Ever wanted to check to see you maybe have something, but you're too lazy to use typescript? Boy, do I have the most useless package for you!

## Example

```js
const MaybeSomething = require("./index");

/**
 * Returns Obj
 * { value }
 **/
let thing = new MaybeSomething("thing");
let nothing = new MaybeSomething(null);

/**
 * MaybeSomething { value: 'thing' }
 * MaybeSomething { value: null }
 * */
console.log(thing);
console.log(nothing);
```

## Contributing

- Contribute on the open source [github](https://github.com/Team-Tritan/Maybe-Something)!
