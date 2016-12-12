interface Array<T> {
    // Return the first item in an array or null if no item exits
    first(): T;

    // Return the first item in an array based upon the search criteria or null if no item exists
    firstOrDefault(selector: (item: T) => boolean): T;

    // Return the last item in an array or null
    lastOrDefault(): T;

    // Run code on every item in a collection
    each(code: (item: T, index: number) => void): Array<T>;

    // Return a new Array<T> based upon the old collection and a slection criteria
    // You provide a predicate that takes a T and returns true to include it in the collection
    where(selector: (item: T) => boolean): Array<T>;

    // Remove an item in the collection
    remove(item: T): Array<T>;

    // Remove an item in collection at a given index
    removeAt(index: number): Array<T>;

    // Take a number of rows, skipping a number of records if you wish.
    take(numberOfRows: number): Array<T>;
    take(numberOfRows: number, offSet: number): Array<T>;
}

Array.prototype.first = function () {
    if (this.length > 0)
        return this[0];

    return null;
}

Array.prototype.firstOrDefault = function (selector: (item: any) => boolean) {
    var collection = [];
    this.each((item: any) => {
        if (selector(item))
            collection.push(item);
    });

    if (this.length == 0)
        return [];

    return collection[0];
}

Array.prototype.lastOrDefault = function () {
    if (this.length == 0)
        return null;

    return this[this.length - 1];
}

Array.prototype.each = function (code: (item: any, index: number) => void) {
    for (var i: number = 0; i < this.length; i++)
        code(this[i], i);

    return this;
}

Array.prototype.where = function (selector: (item: any) => boolean) {
    var collection = [];
    this.each((item: any) => {
        if (selector(item))
            collection.push(item);
    });

    return collection;
}

Array.prototype.remove = function (item: any) {
    return this.where((other: any) => other != item);
}

Array.prototype.removeAt = function (index: number) {
    this.splice(index, 1)
    return this;
}

Array.prototype.take = function (numOfRows: number, offset: number = 0) {
    var collection = [];
    var count = 0;
    this.each((row: any, i: number) => {
        if (i >= offset && count < numOfRows) {
            collection.push(row);
            count++;
        }
    });

    return collection;
}