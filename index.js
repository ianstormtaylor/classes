
var classes = require('classes');


/**
 * Expose `mixin`.
 */

module.exports = exports = mixin;


/**
 * Mixin the classes methods.
 *
 * @param {Object} object
 * @return {Object}
 */

function mixin (obj) {
  for (var method in exports) obj[method] = exports[method];
  return obj;
}


/**
 * Add a class.
 *
 * @param {String} name
 * @return {Object}
 */

exports.addClass = function (name) {
  classes(this.el).add(name);
  return this;
};


/**
 * Remove a class.
 *
 * @param {String} name
 * @return {Object}
 */

exports.removeClass = function (name) {
  classes(this.el).remove(name);
  return this;
};


/**
 * Has a class?
 *
 * @param {String} name
 * @return {Boolean}
 */

exports.hasClass = function (name) {
  return classes(this.el).has(name);
};


/**
 * Toggle a class.
 *
 * @param {String} name
 * @return {Object}
 */

exports.toggleClass = function (name) {
  classes(this.el).toggle(name);
  return this;
};
