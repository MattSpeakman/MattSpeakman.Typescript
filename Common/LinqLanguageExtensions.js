/** Return the first item in an array or null if no item exits*/
Array.prototype.first = function () {
    if (this.length > 0)
        return this[0];
    return null;
};
/** Return the first item in an array based upon the search criteria or null if no item exists*/
Array.prototype.firstOrDefault = function (selector) {
    var collection = [];
    this.each(function (item) {
        if (selector(item))
            collection.push(item);
    });
    if (collection.length == 0)
        return null;
    return collection[0];
};
/** Return the last item in an array or null*/
Array.prototype.lastOrDefault = function () {
    if (this.length == 0)
        return null;
    return this[this.length - 1];
};
/** Run code on every item in a collection*/
Array.prototype.each = function (code) {
    for (var i = 0; i < this.length; i++)
        code(this[i], i);
    return this;
};
/** Return a new Array<T> based upon the old collection and a selection criteria
     You provide a predicate that takes a T and returns true to include it in the collection*/
Array.prototype.where = function (selector) {
    var collection = [];
    this.each(function (item) {
        if (selector(item))
            collection.push(item);
    });
    return collection;
};
/** Remove an item in the collection*/
Array.prototype.remove = function (item) {
    return this.where(function (other) { return other != item; });
};
/** Remove an item in collection at a given index*/
Array.prototype.removeAt = function (index) {
    this.splice(index, 1);
    return this;
};
/** Take a number of rows, skipping a number of records if you wish.*/
Array.prototype.take = function (numOfRows, offset) {
    if (offset === void 0) { offset = 0; }
    var collection = [];
    var count = 0;
    this.each(function (row, i) {
        if (i >= offset && count < numOfRows) {
            collection.push(row);
            count++;
        }
    });
    return collection;
};
/** Order an array using a property selector */
Array.prototype.orderBy = function (selector) {
    return this.sort(function (a, b) {
        var aComparable = selector(a);
        var bComparable = selector(b);
        if (aComparable > bComparable)
            return 1;
        if (aComparable < bComparable)
            return -1;
        return 0;
    });
};
/** Order an array using a property selector in descending order*/
Array.prototype.orderByDescending = function (selector) {
    return this.orderBy(selector).reverse();
};
//# sourceMappingURL=LinqLanguageExtensions.js.map