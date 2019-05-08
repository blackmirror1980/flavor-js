/**
 * @namespace array
 * @description extensions for the JS primitive Array
 */
export default {
  /**
   * loremizes an array
   * @example <caption>eg. usage</caption>
   * console.log(Array.lorem(5)); // [1, 2, 3, 4, 5];
   *
   * console.log(Array.lorem(5, 1)); // [1, 1, 1, 1, 1];
   *
   * console.log(Array.lorem(5, '1')); // ['1', '1', '1', '1', '1'];
   *
   * console.log(Array.lorem(5, {type: 'a', value: 1}));
   * // it logs
   * [
   *   {type: 'a', value: 1},
   *   {type: 'a', value: 1},
   *   {type: 'a', value: 1},
   *   {type: 'a', value: 1},
   *   {type: 'a', value: 1}
   * ];
   *
   * console.log(Array.lorem(5, function(index) {
   *   return {
   *     type: 'a',
   *     value: index,
   *   };
   * });
   * // it logs
   * [
   *   {type: 'a', value: 1},
   *   {type: 'a', value: 2},
   *   {type: 'a', value: 3},
   *   {type: 'a', value: 4},
   *   {type: 'a', value: 5}
   * ];
   *
   * @memberOf array
   * @method lorem
   * @instance
   * @param {number} items
   * @param {function|object} [model=false]
   * @return {array}
   */
  lorem: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(items = 0, model = false) {
      const arr = [];

      Function.times((i) => {
        if (!!model) {
          if (Function.isFunction(model)) {
            arr.push(model(i));
          } else {
            arr.push(model);
          }
        } else {
          arr.push(i);
        }
      }, items);

      return arr;
    },
  },
  /**
   * clones an array
   * @example <caption>eg. usage</caption>
   * var arr1 = [
   *   {type: 'a', value: 1},
   *   {type: 'b', value: 8},
   *   {type: 'c', value: 5},
   *   {type: 'd', value: 7},
   *   {type: 'e', value: 9},
   *   {type: 'f', value: 3},
   * ];
   *
   * var arrClone = Array.clone(arr1); // or var arrClone = arr1.clone();
   *
   * console.log(arr1 === arrClone); // false;
   * @memberOf array
   * @method clone
   * @instance
   * @param {array} arr - the array
   * @return {array}
   */
  clone: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr) {
      return Array.prototype.clone.call(arr);
    },
  },
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
   * @return {array}
   */
  difference: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr1, arr2, symmetric = true) {
      return Array.prototype.difference.call(arr1, arr2, symmetric);
    },
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
   * @return {array}
   */
  intersection: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr1, arr2) {
      return Array.prototype.intersection.call(arr1, arr2);
    },
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
    value(arr, any, all = false) {
      return Array.prototype.contains.call(arr, any, all);
    },
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
   * @param {array} arr - the array to be uniqued
   * @return {array}
   */
  unique: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr) {
      return Array.prototype.unique.call(arr);
    },
  },
  /**
   * cleans up an array from falsy values (0, undefined, null, false) out of an array<br><br>
   * @example <caption>eg. usage</caption>
   * var arr = [false, true, undefined, 0, 1, null, 'a string', {}, []];
   *
   * console.log(Array.clean(arr); // [true, 1, 'a string', {}, []]
   * console.log(arr.clean(); // [true, 1, 'a string', {}, []]
   * @memberOf array
   * @method clean
   * @instance
   * @param {array} arr - the array to be cleaned
   * @return {array}
   */
  clean: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr) {
      return Array.prototype.clean.call(arr);
    },
  },
  /**
   * extracts only numbers values out of an array<br><br>
   * @example <caption>eg. usage</caption>
   * var arr = [null, 'a string', 1, false, undefined, {}, [], 7.85, 0, -0.5];
   *
   * console.log(Array.numbers(arr); // [1, 7.85, 0, -0.5]
   * console.log(arr.numbers(); // [1, 7.85, 0, -0.5]
   * @memberOf array
   * @method numbers
   * @instance
   * @param {array} arr - the array to be filtered
   * @return {array}
   */
  numbers: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr) {
      return Array.prototype.numbers.call(arr);
    },
  },
  /**
   * flattens array a single level deep,<br>
   * or with deep parameter (true boolean) recursively flattens array,<br>
   * or with deep parameter (number) you specify the recursion depth
   * @example <caption>eg. usage</caption>
   * var a = [1, [2, [3, [4]], 5]];
   *
   * console.log(Array.flatten(a)); // [1, 2, [3, [4]], 5]
   * console.log(Array.flatten(a, 1)); // same as above
   * console.log(a.flatten()); // same as above
   * console.log(a.flatten(1)); // same as above
   *
   * console.log(Array.flatten(a, true)); // [1, 2, 3, 4, 5]
   * console.log(a.flatten(true)); // same as above
   *
   * console.log(Array.flatten(a, 2)); // [1, 2, 3, [4], 5]
   * console.log(a.flatten(2)); // same as above
   *
   * console.log(Array.flatten(a, 3)); // [1, 2, 3, 4, 5]
   * console.log(a.flatten(3)); // same as above
   * @memberOf array
   * @method flatten
   * @instance
   * @param {array} arr - the array
   * @param {boolean|number} [deep=false] - the deep (boolean) or depth (number) parameter specifies to do a full recursion or the recursion depth
   * @return {array}
   */
  flatten: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr, deep = false) {
      return Array.prototype.flatten.call(arr, deep);
    },
  },
  /**
   * creates an array of shuffled values, using a version of the Fisher-Yates shuffle. (from lodash documentation)
   * @example <caption>eg. usage</caption>
   * var a = [1, 2, 3, 4, 5];
   *
   * console.log(Array.shuffle(a)); // [4, 3, 5, 1, 2]
   * console.log(a.shuffle()); // same as above (or another randomization ;-)
   * @memberOf array
   * @method shuffle
   * @instance
   * @param {array} arr - the array
   * @return {array}
   */
  shuffle: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr) {
      return Array.prototype.shuffle.call(arr);
    },
  },
  /**
   * splits an array in n-chunks
   * @example <caption>eg. usage</caption>
   * var a = [1, 2, 3, 4, 5];
   *
   * console.log(Array.chunks(a)); // []
   * console.log(a.chunks()); // same as above
   *
   * console.log(Array.chunks(a, 1)); // [[1], [2], [3], [4], [5]]
   * console.log(a.chunks(1)); // same as above
   *
   * console.log(Array.chunks(a, 2)); // [[1, 2], [3, 4], [5]]
   * console.log(a.chunks(2)); // same as above
   *
   * console.log(Array.chunks(a, 3)); // [[1, 2, 3], [4, 5]]
   * console.log(a.chunks(3)); // same as above
   * @memberOf array
   * @method chunks
   * @instance
   * @param {array} arr - the array
   * @param {number} [size=0] - the n pieces of chunks you want
   * @return {array}
   */
  chunks: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr, size = 0) {
      return Array.prototype.chunks.call(arr, size);
    },
  },
  /**
   * returns the first item in an array
   * @example <caption>eg. usage</caption>
   * var a = [1, 2, 3, 4, 5];
   *
   * console.log(Array.head(a)); // 1
   * console.log(a.head()); // same as above
   * @memberOf array
   * @method tail
   * @instance
   * @param {array} arr - the array
   * @return {any}
   */
  head: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr) {
      return Array.prototype.head.call(arr);
    },
  },
  /**
   * returns a sliced array with all elements but the first item
   * @example <caption>eg. usage</caption>
   * var a = [1, 2, 3, 4, 5];
   *
   * console.log(Array.tail(a)); // [2, 3, 4, 5]
   * console.log(a.tail()); // same as above
   * @memberOf array
   * @method tail
   * @instance
   * @param {array} arr - the array
   * @return {array}
   */
  tail: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr) {
      return Array.prototype.tail.call(arr);
    },
  },
  /**
   * returns a sliced array with all elements but the last item
   * @example <caption>eg. usage</caption>
   * var a = [1, 2, 3, 4, 5];
   *
   * console.log(Array.cut(a)); // [1, 2, 3, 4]
   * console.log(a.cut()); // same as above
   * @memberOf array
   * @method cut
   * @instance
   * @param {array} arr - the array
   * @return {array}
   */
  cut: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr) {
      return Array.prototype.cut.call(arr);
    },
  },
  /**
   * returns the last item in an array
   * @example <caption>eg. usage</caption>
   * var a = [1, 2, 3, 4, 5];
   *
   * console.log(Array.last(a)); // 5
   * console.log(a.last()); // same as above
   * @memberOf array
   * @method tail
   * @instance
   * @param {array} arr - the array
   * @return {any}
   */
  last: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr) {
      return Array.prototype.last.call(arr);
    },
  },
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
