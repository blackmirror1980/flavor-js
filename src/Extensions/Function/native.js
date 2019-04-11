import { trueTypeOf } from '../../Helpers/index';

/**
 * @namespace function
 * @description extensions for the JS primitive Function
 */
export default {
  /**
   * checked if something is a function
   * @example <caption>eg. usage</caption>
   * var f = function(){};
   *
   * console.log(Function.isFunction(f)); // true
   *
   * console.log(Function.isFunction(2)); // false
   *
   * console.log(Function.isFunction(function(){})); // true
   *
   * console.log(Function.isFunction(null)); // false
   * @memberOf function
   * @method isFunction
   * @instance
   * @param {function} f - the function to be checked
   * @return {boolean}
   */
  isFunction: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(f) {
      return trueTypeOf(f) === 'function';
    },
  },
  /**
   * proxies a function with scope and optional arguments<br><br>
   * @example <caption>eg. usage</caption>
   * var a = 1;
   * var b = new Date();
   * var c = function() {};
   *
   * var scope = {
     *   prop1: 2.53,
     *   prop2: 'foo';
     * };
   *
   * var f = function(a, b, c) {
     *   console.log(this.prop1, a, b, c);
     * }
   *
   * f(a, b, c);
   * // it logs
   * undefined, 1, Date, function()
   *
   * var pf = f.proxy(scope);
   * pf(a, b, c);
   * // it logs
   * 2.53, 1, Date, function()
   *
   * pf = f.proxy(scope, 2, null);
   * pf(a, b, c);
   * // it logs
   * 2.53, 2, null, function()
   * @memberOf function
   * @method proxy
   * @instance
   * @param {function} f - the function to be proxed
   * @param {object} scope - the scope object (will be `this` inside the function)
   * @param {...object} args - pass one or more arguments to override the original handled arguments
   * @return {function}
   */
  proxy: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(f, scope, ...args) {
      return Function.prototype.proxy.call(f, scope, ...args);
    },
  },
};
