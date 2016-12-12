Array.prototype.first = function () {
    if (this.length > 0)
        return this[0];
    return null;
};
Array.prototype.firstOrDefault = function (selector) {
    var collection = [];
    this.each(function (item) {
        if (selector(item))
            collection.push(item);
    });
    if (this.length == 0)
        return [];
    return collection[0];
};
Array.prototype.lastOrDefault = function () {
    if (this.length == 0)
        return null;
    return this[this.length - 1];
};
Array.prototype.each = function (code) {
    for (var i = 0; i < this.length; i++)
        code(this[i], i);
    return this;
};
Array.prototype.where = function (selector) {
    var collection = [];
    this.each(function (item) {
        if (selector(item))
            collection.push(item);
    });
    return collection;
};
Array.prototype.remove = function (item) {
    return this.where(function (other) { return other != item; });
};
Array.prototype.removeAt = function (index) {
    this.splice(index, 1);
    return this;
};
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
