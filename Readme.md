# classes

  Quickly mixin class helper methods to a view.

## Installation

    $ component install ianstormtaylor/classes

## Example

```js
var Classes = require('classes');

/**
 * Mixin classes.
 */

Classes(View.prototype);

View.prototype.addClass    // fn(name)
View.prototype.removeClass // fn(name)
View.prototype.hasClass    // fn(name)
View.prototype.toggleClass // fn(name)
```

Depends on the view's `.el` property being a DOM element reference.

## API

### Classes(obj)
  Mix the classes methods into a given `obj`.

### #addClass(name)
  Adds a class `name` to `this.el`.

### #removeClass(name)
  Removes a class `name` from `this.el`.

### #hasClass(name)
  Checks whether `this.el` has a class `name`.

### #toggleClass(name)
  Toggles a class `name` on `this.el`.

## License

  MIT
