(function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /**
   * @typedef {array|object} collection
   * @description an array or an object to be used as collection
   */

  /**
   * @typedef {object} prototype
   * @description the prototype of a class
   */

  /**
   * @typedef {number} timestamp
   * @description the number that identifies a specific time as a timestamp
   */

  /* eslint-disable prefer-destructuring */

  /* eslint-disable prefer-rest-params */

  /* eslint-disable no-restricted-globals */

  /* eslint-disable no-bitwise */
  if (!Object.entries) {
    Object.defineProperty(Object, 'entries', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        var ownProps = Object.keys(obj);
        var i = ownProps.length;
        var resArray = new Array(i); // preallocate the Array

        while (i--) {
          resArray[i] = [ownProps[i], obj[ownProps[i]]];
        }

        return resArray;
      }
    });
  }

  if (!Object.hasOwnProperty('getOwnPropertyDescriptors')) {
    Object.defineProperty(Object, 'getOwnPropertyDescriptors', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        return Reflect.ownKeys(obj).reduce(function (descriptors, key) {
          return Object.defineProperty(descriptors, key, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: Object.getOwnPropertyDescriptor(obj, key)
          });
        }, {});
      }
    });
  }

  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(target, firstSource) {
        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert first argument to object');
        }

        var to = Object(target);

        for (var i = 1; i < arguments.length; i++) {
          var nextSource = arguments[i];

          if (nextSource === undefined || nextSource === null) {
            // eslint-disable-next-line no-continue
            continue;
          }

          nextSource = Object(nextSource);
          var keysArray = Object.keys(Object(nextSource));

          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }

        return to;
      }
    });
  }

  function convertToDescriptor(descriptor) {
    if (_typeof(descriptor) !== 'object' || descriptor === null) {
      throw new TypeError('desc is not a valid property descriptor');
    }

    if (Object.prototype.hasOwnProperty.call(descriptor, 'enumerable')) {
      descriptor.enumerable = !!descriptor.enumerable;
    }

    if (Object.prototype.hasOwnProperty.call(descriptor, 'configurable')) {
      descriptor.configurable = !!descriptor.configurable;
    }

    if (Object.prototype.hasOwnProperty.call(descriptor, 'writable')) {
      descriptor.writable = !!descriptor.writable;
    }

    if (Object.prototype.hasOwnProperty.call(descriptor, 'get')) {
      var getter = descriptor.get;

      if (typeof getter !== 'function' && typeof getter !== 'undefined') {
        throw new TypeError("".concat(getter, " is not a valid getter"));
      }
    }

    if (Object.prototype.hasOwnProperty.call(descriptor, 'set')) {
      var setter = descriptor.set;

      if (typeof setter !== 'function' && typeof setter !== 'undefined') {
        throw new TypeError("".concat(setter, " is not a valid setter"));
      }
    }

    if (('get' in descriptor || 'set' in descriptor) && ('value' in descriptor || 'writable' in descriptor)) {
      throw new TypeError('descriptor is not valid due to getter/setter presence along value/writable presence');
    }

    return descriptor;
  }

  if (!Object.defineProperties) {
    Object.defineProperty(Object, 'defineProperties', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(obj, properties) {
        if (_typeof(obj) !== 'object' || obj === null) {
          throw new TypeError('obj is not an object');
        }

        properties = Object(properties);
        Object.entries(properties).forEach(function (property) {
          Object.defineProperty(obj, property[0], convertToDescriptor(property[1]));
        });
        return obj;
      }
    });
  }

  // THANKS TO https://gomakethings.com/true-type-checking-with-vanilla-js/
  function trueTypeOf(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  } // Object.prototype.toString.call([]); // [object Array]
  // Object.prototype.toString.call({}); // [object Object]
  // Object.prototype.toString.call(''); // [object String]
  // Object.prototype.toString.call(new Date()); // [object Date]
  // Object.prototype.toString.call(1); // [object Number]
  // Object.prototype.toString.call(function () {}); // [object Function]
  // Object.prototype.toString.call(/test/i); // [object RegExp]
  // Object.prototype.toString.call(true); // [object Boolean]
  // Object.prototype.toString.call(null); // [object Null]
  // Object.prototype.toString.call(); // [object Undefined]

  /* eslint-disable prefer-destructuring */

  /* eslint-disable prefer-rest-params */

  /* eslint-disable no-restricted-globals */

  /* eslint-disable no-bitwise */

  /**
   * Array.isArray() polyfill
   */
  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  if (!Array.isArray) {
    Object.defineProperty(Array, 'isArray', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(arr) {
        return trueTypeOf(arr) === 'array';
      }
    });
  }

  if (!Array.prototype.filter) {
    Object.defineProperty(Array.prototype, 'filter', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(f) {
        if (this === undefined || this === null) {
          throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        if (typeof fun !== 'function') {
          throw new TypeError();
        }

        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : undefined;
        var val = null;

        for (var i = 0; i < len; i++) {
          if (i in t) {
            val = t[i]; // NOTE: Technically this should Object.defineProperty at
            //       the next index, as push can be affected by
            //       properties on Object.prototype and Array.prototype.
            //       But that method's new, and collisions should be
            //       rare, so use the more-compatible alternative.

            if (f.call(thisArg, val, i, t)) {
              res.push(val);
            }
          }
        }

        return res;
      }
    });
  }

  if (!Array.prototype.map) {
    Object.defineProperty(Array.prototype, 'map', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(arr, iterator) {
        var result = [];

        for (var i = 0; i < arr.length; i += 1) {
          result.push(iterator(arr[i]));
        }

        return result;
      }
    });
  }

  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(valueToFind, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        } // 1. Let O be ? ToObject(this value).


        var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

        var len = o.length >>> 0; // 3. If len is 0, return false.

        if (len === 0) {
          return false;
        } // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)


        var n = fromIndex | 0; // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.

        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        } // 7. Repeat, while k < len


        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(valueToFind, elementK) is true, return true.
          if (sameValueZero(o[k], valueToFind)) {
            return true;
          } // c. Increase k by 1.


          k++;
        } // 8. Return false


        return false;
      }
    });
  } // Production steps of ECMA-262, Edition 5, 15.4.4.21
  // Reference: http://es5.github.io/#x15.4.4.21
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce


  if (!Array.prototype.reduce) {
    Object.defineProperty(Array.prototype, 'reduce', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(callback
      /*, initialValue*/
      ) {
        if (this === null) {
          throw new TypeError('Array.prototype.reduce called on null or undefined');
        }

        if (typeof callback !== 'function') {
          throw new TypeError(callback + ' is not a function');
        } // 1. Let O be ? ToObject(this value).


        var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

        var len = o.length >>> 0; // Steps 3, 4, 5, 6, 7

        var k = 0;
        var value;

        if (arguments.length === 2) {
          value = arguments[1];
        } else {
          while (k < len && !(k in o)) {
            k++;
          } // 3. If len is 0 and initialValue is not present, throw a TypeError exception.


          if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value');
          }

          value = o[k++];
        } // 8. Repeat, while k < len


        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kPresent be ? HasProperty(O, Pk).
          // c. If kPresent is true, then
          //    i. Let kValue be ? Get(O, Pk).
          //    ii. Let accumulator be ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
          if (k in o) {
            value = callback(value, o[k], k, o);
          } // d. Increase k by 1.


          k++;
        } // 9. Return accumulator.


        return value;
      }
    });
  }

  /* eslint-disable prefer-destructuring */

  /* eslint-disable prefer-rest-params */

  /* eslint-disable no-restricted-globals */

  /* eslint-disable no-bitwise */
  if (!String.prototype.includes) {
    Object.defineProperty(String.prototype, 'includes', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(search, start) {
        start = typeof start !== 'number' ? 0 : start;

        if (start + search.length > this.length) {
          return false;
        }

        return this.indexOf(search, start) !== -1;
      }
    });
  }

  if (!String.prototype.toCamelCase) {
    Object.defineProperty(String.prototype, 'toCamelCase', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value() {
        var s = this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
          return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
        }).join('');
        return s.slice(0, 1).toLowerCase() + s.slice(1);
      }
    });
  }

  // check if needed https://github.com/airbnb/js-shims

  /**
   * @namespace object
   * @description extensions for the JS primitive Object
   */
  var prototype = {};

  /**
   * @namespace object
   * @description extensions for the JS primitive Object
   */
  var _native = {};

  /**
   * @namespace object
   * @description extensions for the JS primitive Object
   */
  var ObjectExt = {
    prototype: prototype,
    "native": _native
  };

  /**
   * @namespace function
   * @description extensions for the JS primitive Function
   */
  var prototype$1 = {
    proxy: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(scope) {
        for (var _len = arguments.length, proxyArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          proxyArgs[_key - 1] = arguments[_key];
        }

        var func = this;
        return function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return func.apply(scope, proxyArgs.length >= 1 ? proxyArgs : args);
        };
      }
    }
  };

  /**
   * @namespace function
   * @description extensions for the JS primitive Function
   */

  var _native$1 = {
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
      value: function value(f) {
        return trueTypeOf(f) === 'function';
      }
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
      value: function value(f, scope) {
        var _Function$prototype$p;

        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        return (_Function$prototype$p = Function.prototype.proxy).call.apply(_Function$prototype$p, [f, scope].concat(args));
      }
    }
  };

  /**
   * @namespace function
   * @description extensions for the JS primitive Function
   */
  var FunctionExt = {
    prototype: prototype$1,
    "native": _native$1
  };

  /**
   * @namespace boolean
   * @description extensions for the JS primitive Boolean
   */
  var prototype$2 = {};

  /**
   * @namespace boolean
   * @description extensions for the JS primitive Boolean
   */

  var _native$2 = {
    /**
     * isBoolean
     * @example <caption>eg. usage</caption>
     * var b = true;
     *
     * console.log(Boolean.isBoolean(b)); // true
     *
     * console.log(Boolean.isBoolean(2)); // false
     *
     * console.log(Boolean.isBoolean(false)); // true
     *
     * console.log(Boolean.isBoolean(null)); // false
     * @memberOf boolean
     * @method isBoolean
     * @instance
     * @return {boolean}
     */
    isBoolean: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(b) {
        return trueTypeOf(b) === 'boolean';
      }
    },

    /**
     * randomizes a boolean value
     * @example <caption>eg. usage</caption>
     * console.log(Boolean.random()); // it logs true or false
     * @memberOf boolean
     * @method random
     * @instance
     * @return {boolean}
     */
    random: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value() {
        return Math.random() >= 0.5;
      }
    }
  };

  /**
   * @namespace boolean
   * @description extensions for the JS primitive Boolean
   */
  var BooleanExt = {
    prototype: prototype$2,
    "native": _native$2
  };

  /**
   * @namespace number
   * @description extensions for the JS primitive Number
   */
  var prototype$3 = {};

  /**
   * @namespace number
   * @description extensions for the JS primitive Number
   */
  var _native$3 = {};

  /**
   * @namespace number
   * @description extensions for the JS primitive Number
   */
  var NumberExt = {
    prototype: prototype$3,
    "native": _native$3
  };

  /**
   * @namespace date
   * @description extensions for the JS primitive Date
   */
  var prototype$4 = {
    toTimestamp: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value() {
        return Math.round(this);
      }
    }
  };

  /**
   * @namespace date
   * @description extensions for the JS primitive Date
   */

  var _native$4 = {
    /**
     * checks if something is a date
     * @example <caption>eg.usage</caption>
     * console.log(Date.isDate(new Date())); // true
     *
     * console.log(Date.isDate(0)); // false
     * @memberOf date
     * @method isDate
     * @instance
     * @param {*} d - the value to check
     * @return {boolean}
     */
    isDate: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(d) {
        return trueTypeOf(d) === 'date';
      }
    },

    /**
     * returns a random date between specified range (default now <-> now)
     * @example <caption>eg. usage</caption>
     * console.log(Date.random()); // Mon Jan 22 2018 14:07:09 GMT+0100 (CET)
     *
     * console.log(Date.random(new Date(1970, 0, 1), new Date())); // Sun Apr 05 1987 00:00:00 GMT+0200 (CEST)
     * @memberOf date
     * @method random
     * @instance
     * @param {date} startDate [null] - the range start date
     * @param {date} endDate [null] - the range end date
     * @return {date}
     */
    random: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value() {
        var startDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var endDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (!startDate && !endDate) {
          return new Date(new Date().getTime() * Math.random());
        }

        return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
      }
    },

    /**
     * transforms a date in a UTC timestamp integer
     * @example <caption>eg. usage</caption>
     * console.log((new Date()).toTimestamp()); // 1491317811925 @ 2017-04-4-16:57
     * @memberOf date
     * @method toTimestamp
     * @instance
     * @param {date} d - the date to convert
     * @return {timestamp|0}
     */
    toTimestamp: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(d) {
        if (!Date.isDate(d)) {
          return 0;
        }

        return Date.prototype.toTimestamp.call(d);
      }
    }
  };

  /**
   * @namespace date
   * @description extensions for the JS primitive Date
   */
  var DateExt = {
    prototype: prototype$4,
    "native": _native$4
  };

  /**
   * @namespace string
   * @description extensions for the JS primitive String
   */
  var prototype$5 = {};

  /**
   * @namespace string
   * @description extensions for the JS primitive String
   */

  var _native$5 = {
    /**
     * checks if something is a string
     * @example <caption>eg. usage</caption>
     * var s = 'foo';
     *
     * console.log(String.isString(s)); // true
     *
     * console.log(String.isString(2)); // false
     *
     * console.log(String.isString('')); // true
     *
     * console.log(String.isString(null)); // false
     * @memberOf string
     * @method isString
     * @instance
     * @param {string} s - the string to be checked
     * @return {boolean}
     */
    isString: function isString(s) {
      return trueTypeOf(s) === 'string';
    }
  };

  /**
   * @namespace string
   * @description extensions for the JS primitive String
   */
  var StringExt = {
    prototype: prototype$5,
    "native": _native$5
  };

  /**
   * @namespace array
   * @description extensions for the JS primitive Array
   */
  var prototype$6 = {
    //TODO: implement rest arrays difference
    difference: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(arr) {
        var _this = this;

        var symmetric = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (!!symmetric) {
          return Array.prototype.unique.call([].concat(_toConsumableArray(this.filter(function (item) {
            return !arr.includes(item);
          })), _toConsumableArray(arr.filter(function (item) {
            return !_this.includes(item);
          }))));
        }

        return this.filter(function (item) {
          return !arr.includes(item);
        });
      }
    },
    // //TODO: implement rest arrays intersection
    intersection: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(arr) {
        return this.filter(function (item) {
          return arr.includes(item);
        });
      }
    },
    contains: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(any) {
        var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (Array.isArray(any)) {
          if (!all) {
            return Array.prototype.intersection.call(this, any).length > 0;
          }

          return Array.prototype.difference.call(this, any).length === 0;
        }

        return Array.prototype.includes.call(this, any);
      }
    },
    unique: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value() {
        return _toConsumableArray(new Set(this));
      }
    } // sortBy(propNames, propDirections) {
    //   if (String.isString(propNames)) {
    //     propNames = [propNames];
    //   }
    //   if (!!propDirections) {
    //     if (String.isString(propDirections)) {
    //       propDirections = [propDirections];
    //     }
    //   } else {
    //     propDirections = propNames.map(() => {
    //       return 'asc';
    //     });
    //   }
    //   return _.orderBy(this, propNames, propDirections);
    // },
    // deepSortBy(propNames, propDirections = null, childrenPropName = 'children') {
    //   if (String.isString(propNames)) {
    //     propNames = [propNames];
    //   }
    //   if (!!propDirections) {
    //     if (String.isString(propDirections)) {
    //       propDirections = [propDirections];
    //     }
    //   } else {
    //     propDirections = propNames.map(() => {
    //       return 'asc';
    //     });
    //   }
    //   return _.deepOrderBy(this, propNames, propDirections, childrenPropName);
    // },
    // filterBy(propNames, propValues) {
    //   let predicate = null;
    //   if (Function.isFunction(propNames)) {
    //     predicate = propNames;
    //     return _.filter(this, predicate);
    //   } else if (Array.isArray(propValues)) {
    //     return _.filterByValues(this, propNames, propValues);
    //   }
    //   predicate = {};
    //   predicate[propNames] = propValues;
    //   return _.filter(this, predicate) || [];
    // },
    // pull(item) {
    //   return _.pull(this, item);
    // },
    // pullBy(propName, propValue) {
    //   if (Array.isArray(propName) && _.isFunction(propValue)) {
    //     const values = propName;
    //     const comparator = propValue;
    //     return _.pullAllByComparator(this, values, comparator);
    //   }
    //   const predicate = {};
    //   predicate[propName] = propValue;
    //   return _.pullAllBy(this, [predicate]);
    // },
    // findBy(propName, propValue = null, reverse = false) {
    //   let predicate = null;
    //   if (Function.isFunction(propName) || Object.isObject(propName)) {
    //     predicate = propName;
    //   } else if (String.isString(propName)) {
    //     predicate = {};
    //     predicate[propName] = propValue;
    //   }
    //   if (predicate) {
    //     if (reverse) {
    //       return _.findLast(this, predicate);
    //     }
    //     return _.find(this, predicate);
    //   }
    //   return null;
    // },
    // deepFindBy(propName, propValue = null, childrenPropName = 'children') {
    //   return _.deepFindBy(this, propName, propValue, childrenPropName);
    // },
    // indexBy(propName, propValue, reverse = false) {
    //   let predicate = null;
    //   if (Function.isFunction(propName) || Object.isObject(propName)) {
    //     predicate = propName;
    //   } else if (String.isString(propName)) {
    //     predicate = {};
    //     predicate[propName] = propValue;
    //   }
    //   if (predicate) {
    //     if (reverse) {
    //       return _.findLastIndex(this, predicate);
    //     }
    //     return _.findIndex(this, predicate);
    //   }
    //   return null;
    // },
    // containsBy(propName, propValue) {
    //   return this.findBy(propName, propValue) !== undefined;
    // },
    // countBy(propName, propValue, falseValues) {
    //   let predicate = null;
    //   if (Function.isFunction(propName) || Object.isObject(propName)) {
    //     predicate = propName;
    //   } else if (String.isString(propName)) {
    //     predicate = {};
    //     predicate[propName] = propValue;
    //   }
    //   if (!!predicate) {
    //     return _.countBy(this, predicate)[!!falseValues ? 'false' : 'true'];
    //   }
    //   return 0;
    // },
    // union(...arrays) {
    //   return _.unionWith(this, ...arrays, _.isEqual);
    // },
    // random(weightField = null, valueField = null) {
    //   if (!!weightField) {
    //     return this.map((item) => {
    //       return _.times(item[weightField || 'weight'], () => {
    //         if (!!valueField) {
    //           return item[valueField || 'value'];
    //         }
    //         return _.omit(item, weightField);
    //       });
    //     }).flatten().shuffle().first();
    //   }
    //   return _.sample(this);
    // },
    // each(iteratee, reverse = false) {
    //   if (!!reverse) {
    //     return _.eachRight(this, iteratee);
    //   }
    //   return _.each(this, iteratee);
    // },
    // first(propName, propValue) {
    //   let a = this;
    //   if (!!propName) {
    //     a = this.filterBy(propName, propValue);
    //   }
    //   return _.first(a);
    // },
    // last(propName, propValue) {
    //   let a = this;
    //   if (!!propName) {
    //     a = this.filterBy(propName, propValue);
    //   }
    //   return _.last(a);
    // },
    // sum(propName, startValue = 0) {
    //   let predicate = null;
    //   if (Function.isFunction(propName)) {
    //     predicate = propName;
    //   } else {
    //     predicate = (acc, item) => {
    //       return acc + item[propName];
    //     };
    //   }
    //   return _.reduce(this, predicate, startValue);
    // },
    // deepMap(childrenPropName = 'children', iteratee) {
    //   return _.deepMap(this, childrenPropName, iteratee);
    // },
    // lorem(items, model = false) {
    //   return Number.times(items, (i) => {
    //     if (!!model) {
    //       return Function.isFunction(model) ? model(i) : model;
    //     }
    //     return i;
    //   });
    // },
    // flatten(deep) {
    //   if (!!deep) {
    //     if (Number.isNumber(deep)) {
    //       return _.flattenDepth(this, deep);
    //     } else if (Boolean.isBoolean(deep)) {
    //       return _.flattenDeep(this);
    //     }
    //   }
    //   return _.flatten(this);
    // },
    // shuffle() {
    //   return _.shuffle(this);
    // },
    // split(n = 0) {
    //   return _.chunk(this, n);
    // },
    // reverse(clone = false) {
    //   if (!!clone) {
    //     return _.reverse(_.clone(this));
    //   }
    //   return _.reverse(this);
    // },
    // tail() {
    //   return _.tail(this);
    // },
    // cut() {
    //   return _.initial(this);
    // },
    // clone() {
    //   return [...this];
    // },
    // maxBy(propName = null) {
    //   if (propName) {
    //     return _.maxBy(this, propName);
    //   }
    //   return null;
    // },

  };

  /**
   * @namespace array
   * @description extensions for the JS primitive Array
   */
  var _native$6 = {
    /**
     * return a new array containing the difference between two arrays
     * @example <caption>eg. usage</caption>
     * var arr1 = ['a', 'e', 'i', 'o', 'u'];
     * var arr2 = ['a', 'd', 'f', 'o', 'u'];
     *
     * console.log(Array.difference(arr1, arr2)); // ['d', 'e', 'f', 'i']
     * console.log(Array.difference(arr1, arr2, false)); // ['e', 'i']
     *
     * console.log(arr1.difference(arr2)); // ['d', 'e', 'f', 'i']
     * console.log(arr1.difference(arr2, false)); // ['e', 'i']
     * @memberOf array
     * @method difference
     * @instance
     * @param {array} arr1 - the first array
     * @param {array} arr2 - the second array
     * @param {boolean} symmetric - if true does the real difference between both of the two arrays
     * @return {boolean}
     */
    difference: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(arr1, arr2) {
        var symmetric = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (Array.isArray(arr1) && Array.isArray(arr2)) {
          return Array.prototype.difference.call(arr1, arr2, symmetric);
        }

        return [];
      }
    },

    /**
     * return a new array containing the intersection between two arrays
     * @example <caption>eg. usage</caption>
     * var arr1 = ['a', 'e', 'i', 'o', 'u'];
     * var arr2 = ['a', 'd', 'f', 'o', 'u'];
     *
     * console.log(Array.intersection(arr1, arr2)); // ['a', 'o', 'u']
     *
     * console.log(arr1.intersection(arr2)); // ['a', 'o', 'u']
     * @memberOf array
     * @method intersection
     * @instance
     * @param {array} arr1 - the first array
     * @param {array} arr2 - the second array
     * @return {boolean}
     */
    intersection: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(arr1, arr2) {
        if (Array.isArray(arr1) && Array.isArray(arr2)) {
          return Array.prototype.intersection.call(arr1, arr2);
        }

        return [];
      }
    },

    /**
     * checks if an Array contains something
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'e', 'i', 'o', 'u'];
     *
     * console.log(Array.contains(arr, 'b')); // false
     * console.log(Array.contains(arr, 'a')); // true
     * console.log(Array.contains(arr, ['a', 'b', 'e']); // true
     * console.log(Array.contains(arr, ['a', 'b', 'e'], true); // false
     *
     * console.log(arr.contains('b')); // false
     * console.log(arr.contains('a')); // true
     * console.log(arr.contains(['a', 'b', 'e']); // true
     * console.log(arr.contains(['a', 'b', 'e'], true); // false
     * @memberOf array
     * @method contains
     * @instance
     * @param {array} arr - the array to be checked
     * @param {array|*} any - can be anything or an array of anything
     * @param {boolean} [all=false] - specify to check if the array must contain all items
     * @return {boolean}
     */
    contains: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(arr, any) {
        var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (Array.isArray(arr)) {
          return Array.prototype.contains.call(arr, any, all);
        }

        return arr;
      }
    },

    /**
     * returns a new unique items array from an array<br><br>
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'a', 'e', 'i', 'o', 'u'];
     *
     * console.log(Array.unique(arr); // ['a', 'e', 'i', 'o', 'u']
     * console.log(arr.unique(); // ['a', 'e', 'i', 'o', 'u']
     * @memberOf array
     * @method unique
     * @instance
     * @param {array} a - the array to be uniqued
     * @return {array}
     */
    unique: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(a) {
        if (Array.isArray(a)) {
          return Array.prototype.unique.call(a);
        }

        return a;
      }
    } // /**
    //  * loremizes an array
    //  * @example <caption>eg. usage</caption>
    //  * console.log(Array.lorem(5)); // [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.lorem(5, 1)); // [1, 1, 1, 1, 1];
    //  *
    //  * console.log(Array.lorem(5, '1')); // ['1', '1', '1', '1', '1'];
    //  *
    //  * console.log(Array.lorem(5, {type: 'a', value: 1}));
    //  * // it logs
    //  * [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'a', value: 1},
    //  *   {type: 'a', value: 1},
    //  *   {type: 'a', value: 1},
    //  *   {type: 'a', value: 1}
    //  * ];
    //  *
    //  * console.log(Array.lorem(5, function(index) {
    //  *   return {
    //  *     type: 'a',
    //  *     value: index,
    //  *   };
    //  * });
    //  * // it logs
    //  * [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'a', value: 2},
    //  *   {type: 'a', value: 3},
    //  *   {type: 'a', value: 4},
    //  *   {type: 'a', value: 5}
    //  * ];
    //  *
    //  * @memberOf array
    //  * @method lorem
    //  * @instance
    //  * @param {number} items
    //  * @param {function|object} [model=false]
    //  * @return {array}
    //  */
    // lorem(items, model = false) {
    //   return Array.prototype.lorem.call(items, model);
    // },
    // /**
    //  * flattens array a single level deep,<br>
    //  * or with deep parameter (true boolean) recursively flattens array,<br>
    //  * or with deep parameter (number) you specify the recursion depth
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, [2, [3, [4]], 5]];
    //  *
    //  * console.log(Array.flatten(a)); // [1, 2, [3, [4]], 5]
    //  * console.log(Array.flatten(a, 1)); // same as above
    //  * console.log(a.flatten()); // same as above
    //  * console.log(a.flatten(1)); // same as above
    //  *
    //  * console.log(Array.flatten(a, true)); // [1, 2, 3, 4, 5]
    //  * console.log(a.flatten(true)); // same as above
    //  *
    //  * console.log(Array.flatten(a, 2)); // [1, 2, 3, [4], 5]
    //  * console.log(a.flatten(2)); // same as above
    //  *
    //  * console.log(Array.flatten(a, 3)); // [1, 2, 3, 4, 5]
    //  * console.log(a.flatten(3)); // same as above
    //  * @memberOf array
    //  * @method flatten
    //  * @instance
    //  * @param {array} a - the array
    //  * @param {boolean|number} [deep=false] - the deep (boolean) or depth (number) parameter specifies to do a full recursion or the recursion depth
    //  * @return {array}
    //  */
    // flatten(a, deep = false) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.flatten.call(a, deep);
    //   }
    //   return a;
    // },
    // /**
    //  * creates an array of shuffled values, using a version of the Fisher-Yates shuffle. (from lodash documentation)
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.shuffle(a)); // [4, 3, 5, 1, 2]
    //  * console.log(a.shuffle()); // same as above (or another randomization ;-)
    //  * @memberOf array
    //  * @method shuffle
    //  * @instance
    //  * @param {array} a - the array
    //  * @return {array}
    //  */
    // shuffle(a) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.shuffle.call(a);
    //   }
    //   return a;
    // },
    // /**
    //  * splits an array in n-pieces chunks
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.split(a)); // []
    //  * console.log(a.split()); // same as above
    //  *
    //  * console.log(Array.split(a, 1)); // [[1], [2], [3], [4], [5]]
    //  * console.log(a.split(1)); // same as above
    //  *
    //  * console.log(Array.split(a, 2)); // [[1, 2], [3, 4], [5]]
    //  * console.log(a.split(2)); // same as above
    //  *
    //  * console.log(Array.split(a, 3)); // [[1, 2, 3], [4, 5]]
    //  * console.log(a.split(3)); // same as above
    //  * @memberOf array
    //  * @method split
    //  * @instance
    //  * @param {array} a - the array
    //  * @param {number} [n=0] - the n pieces of chunks you want
    //  * @return {array}
    //  */
    // split(a, n = 0) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.split.call(a, n);
    //   }
    //   return a;
    // },
    // /**
    //  * reverses an array, with optional clone parameter to avoid original array mutation
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.reverse(a)); // [5, 4, 3, 2, 1]
    //  * console.log(a.reverse()); // same as above
    //  *
    //  * console.log(a === [5, 4, 3, 2, 1]); // true
    //  *
    //  * var b = Array.reverse(a, true); // or var b = a.reverse(true);
    //  *
    //  * console.log(a); // [1, 2, 3, 4, 5]
    //  * console.log(b); // [5, 4, 3, 2, 1]
    //  * @memberOf array
    //  * @method tail
    //  * @instance
    //  * @param {array} a - the array
    //  * @param {boolean} [clone=false]
    //  * @return {array}
    //  */
    // reverse(a, clone = false) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.reverse.call(a, clone);
    //   }
    //   return a;
    // },
    // /**
    //  * returns a sliced array with all elements but the first item
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.tail(a)); // [2, 3, 4, 5]
    //  * console.log(a.tail()); // same as above
    //  * @memberOf array
    //  * @method tail
    //  * @instance
    //  * @param {array} a - the array
    //  * @return {array}
    //  */
    // tail(a) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.tail.call(a);
    //   }
    //   return a;
    // },
    // /**
    //  * returns a sliced array with all elements but the last item
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.cut(a)); // [1, 2, 3, 4]
    //  * console.log(a.cut()); // same as above
    //  * @memberOf array
    //  * @method cut
    //  * @instance
    //  * @param {array} a - the array
    //  * @return {array}
    //  */
    // cut(a) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.cut.call(a);
    //   }
    //   return a;
    // },
    // /**
    //  * clones an array
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'b', value: 8},
    //  *   {type: 'c', value: 5},
    //  *   {type: 'd', value: 7},
    //  *   {type: 'e', value: 9},
    //  *   {type: 'f', value: 3},
    //  * ];
    //  *
    //  * var clone = Array.clone(collection); // or var clone = collection.clone();
    //  *
    //  * console.log(collection === clone); // false;
    //  * @memberOf array
    //  * @method clone
    //  * @instance
    //  * @param {array} a - the array
    //  * @return {array}
    //  */
    // clone(a) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.clone.call(a);
    //   }
    //   return a;
    // },
    // /**
    //  * finds max value by propName in a collection array
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'b', value: 8},
    //  *   {type: 'c', value: 5},
    //  *   {type: 'd', value: 7},
    //  *   {type: 'e', value: 9},
    //  *   {type: 'f', value: 3},
    //  * ];
    //  *
    //  * console.log(Array.maxBy(a, 'value')); // {type:'e', value: 9}
    //  * console.log(Array.maxBy(a, 'type')); // {type:'f', value: 3}
    //  *
    //  * console.log(a.maxBy('value')); // {type:'e', value: 9}
    //  * console.log(a.maxBy('type')); // {type:'f', value: 3}
    //  * @memberOf array
    //  * @method maxBy
    //  * @instance
    //  * @param {array} a - the array to check for max value
    //  * @param {string} [propName=null] - the property name to use for comparation
    //  * @return {object}
    //  */
    // maxBy(a, propName) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.maxBy.call(a, propName);
    //   }
    //   return a;
    // },

  };

  /**
   * @namespace array
   * @description extensions for the JS primitive Array
   */
  var ArrayExt = {
    prototype: prototype$6,
    "native": _native$6
  };

  /**
   * @namespace collection
   * @description extensions for the JS Collection
   */

  /* eslint-disable no-useless-constructor */

  var Collection =
  /*#__PURE__*/
  function (_Array) {
    _inherits(Collection, _Array);

    function Collection() {
      var _getPrototypeOf2;

      _classCallCheck(this, Collection);

      for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Collection)).call.apply(_getPrototypeOf2, [this].concat(items)));
    }

    return Collection;
  }(_wrapNativeSuper(Array));

  if (!!window) {
    window.Collection = Collection;
  }

  var Extensions = {
    Object: ObjectExt,
    Function: FunctionExt,
    Boolean: BooleanExt,
    Number: NumberExt,
    Date: DateExt,
    String: StringExt,
    Array: ArrayExt
  };

  /**
   * constructs Flavor class & extends the js natives
   * @class Flavor
   * @classdesc Flavor the definitive JS natives chainable extensions methods
   * @public
   */

  var Flavor =
  /*#__PURE__*/
  function () {
    function Flavor() {
      _classCallCheck(this, Flavor);

      this.init();
    }
    /**
     * safe js native prototype extension using Object.defineProperty
     * @memberOf Flavor
     * @method extendProp
     * @instance
     * @param {prototype|object} target - the prototype/object to extend
     * @param {string} prop - the name of the property to be defined or modified
     * @param {*} val - val to be used as value in the descriptor for the property, can be any kind of native (number, function, etc...) or what you want
     * @param {object} [options={}] - options to be used as parameters in the descriptor for the property<br>
     * possible options are (source documentation from <a href="https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/object/defineProperty" target="_blank">Javascript|MDN docs</a>)<br>
     * @param {boolean} [options.configurable=true] configurable - true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding Object.
     * @param {boolean} [options.enumerable=false] enumerable - true if and only if this property shows up during enumeration of the properties on the corresponding Object.
     * @param {boolean} [options.writable=true] writable - true if and only if the value associated with the property may be changed with an assignment operator.
     * @param {function} [options.get=undefined] get - A function which serves as a getter for the property, or undefined if there is no getter. The function return will be used as the value of property.<br>
     * for example...<br>
     * <pre>
     * function ClassName() {
     *   var privateProp = null;
     *
     *   Object.defineProperty(this, 'publicProp', {
     *     get: function() {
     *       return privateProp;
     *     }
     *   });
     * }
     * </pre>
     * @param {function} [options.set=undefined] set - A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as only argument the new value being assigned to the property.<br>
     * for example...<br>
     * <pre>
     * function ClassName() {
     *   var privateProp = null;
     *
     *   Object.defineProperty(this, 'publicProp', {
     *     set: function(value) {
     *       privateProp = value;
     *     }
     *   });
     * }
     * </pre>
     */


    _createClass(Flavor, [{
      key: "extendProp",
      value: function extendProp(target, prop, val) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        Object.defineProperty(target, prop, {
          value: val,
          writable: options.writable || true,
          configurable: options.configurable || true,
          enumerable: options.enumerable || false
        });
      }
      /**
       * merges all keys in extend plain object to the prototype (
       * @memberOf Flavor
       * @method extendProps
       * @instance
       * @param {prototype|object} target - the prototype/object to extend
       * @param {object} extensions - the extend object to be merged in prototype
       */

    }, {
      key: "extendProps",
      value: function extendProps(target, extensions) {
        Object.defineProperties(target, extensions);
      }
      /**
       * extendObject
       * @memberOf Flavor
       * @method extendObject
       * @instance
       */

    }, {
      key: "extendObject",
      value: function extendObject() {
        this.extendProps(Object.prototype, Extensions.Object.prototype);
        this.extendProps(Object, Extensions.Object["native"]);
      }
      /**
       * extendFunction
       * @memberOf Flavor
       * @method extendFunction
       * @instance
       */

    }, {
      key: "extendFunction",
      value: function extendFunction() {
        this.extendProps(Function.prototype, Extensions.Function.prototype);
        this.extendProps(Function, Extensions.Function["native"]);
      }
      /**
       * extendBoolean
       * @memberOf Flavor
       * @method extendBoolean
       * @instance
       */

    }, {
      key: "extendBoolean",
      value: function extendBoolean() {
        this.extendProps(Boolean.prototype, Extensions.Boolean.prototype);
        this.extendProps(Boolean, Extensions.Boolean["native"]);
      }
      /**
       * extendNumber
       * @memberOf Flavor
       * @method extendNumber
       * @instance
       */

    }, {
      key: "extendNumber",
      value: function extendNumber() {
        this.extendProps(Number.prototype, Extensions.Number.prototype);
        this.extendProps(Number, Extensions.Number["native"]);
      }
      /**
       * extendDate
       * @memberOf Flavor
       * @method extendDate
       * @instance
       */

    }, {
      key: "extendDate",
      value: function extendDate() {
        this.extendProps(Date.prototype, Extensions.Date.prototype);
        this.extendProps(Date, Extensions.Date["native"]);
      }
      /**
       * extendString
       * @memberOf Flavor
       * @method extendString
       * @instance
       */

    }, {
      key: "extendString",
      value: function extendString() {
        this.extendProps(String.prototype, Extensions.String.prototype);
        this.extendProps(String, Extensions.String["native"]);
      }
      /**
       * extendArray
       * @memberOf Flavor
       * @method extendArray
       * @instance
       */

    }, {
      key: "extendArray",
      value: function extendArray() {
        this.extendProps(Array.prototype, Extensions.Array.prototype);
        this.extendProps(Array, Extensions.Array["native"]);
      }
      /**
       * initialize all
       * @memberOf Flavor
       * @method init
       * @instance
       */

    }, {
      key: "init",
      value: function init() {
        this.extendObject();
        this.extendFunction();
        this.extendBoolean();
        this.extendNumber();
        this.extendDate();
        this.extendString();
        this.extendArray();
        console.warn('FlavorJS initialized');
      }
    }]);

    return Flavor;
  }();

  /*global Window*/

  if (typeof module !== 'undefined') {
    module.exports = Flavor;
  }

}());