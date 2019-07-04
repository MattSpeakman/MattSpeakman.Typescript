
interface Grouping<TGroup, T> {
    group: TGroup;
    data: T[]
}

interface Array<T> {
    /** Return the first item in an array or null if no item exits*/
    first(): T;

    /** Return the first item in an array based upon the search criteria or null if no item exists*/
    firstOrDefault(selector: (item: T) => boolean): T;

    /** Return the last item in an array or null*/
    lastOrDefault(): T;

    /** Run code on every item in a collection*/
    each(code: (item: T, index: number) => void): Array<T>;

    /** Return a new Array<T> based upon the old collection and a selection criteria
     You provide a predicate that takes a T and returns true to include it in the collection*/
    where(selector: (item: T) => boolean): Array<T>;

    /** Remove an item in the collection*/
    remove(item: T): Array<T>;

    /** Remove an item in collection at a given index*/
    removeAt(index: number): Array<T>;

    /** Take a number of rows, skipping a number of records if you wish.*/
    take(numberOfRows: number): Array<T>;
    take(numberOfRows: number, offSet: number): Array<T>;

    /** Order an array using a property selector */
    orderBy(selector: (item: T) => any): Array<T>;

    /** Order an array using a property selector in descending order*/
    orderByDescending(selector: (item: T) => any): Array<T>;

    /** Return the sum of the property defined in the predicate */
    sum(selector: (item: T) => number): number;

    /** Return a selection of properties from each item in the array that are distinct */
    distinct<NewT>(selector:(item: T)=> NewT): Array<NewT>
    
    /** Project each item in the array to a new form */
    select<NewT>(selector: (item: T) => any): Array<NewT>

    groupBy<TGroup, T>(selector: (item: any) => any): Grouping<TGroup, T>[]
}


/** Return the first item in an array or null if no item exits*/
Array.prototype.first = function () {
    if (this.length > 0)
        return this[0];

    return null;
}

/** Return the first item in an array based upon the search criteria or null if no item exists*/
Array.prototype.firstOrDefault = function (selector: (item: any) => boolean) {
    var collection = [];
    this.each((item: any) => {
        if (selector(item))
            collection.push(item);
    });

    if (collection.length == 0)
        return null;

    return collection[0];
}

/** Return the last item in an array or null*/
Array.prototype.lastOrDefault = function () {
    if (this.length == 0)
        return null;

    return this[this.length - 1];
}

/** Run code on every item in a collection*/
Array.prototype.each = function (code: (item: any, index: number) => void) {
    for (var i: number = 0; i < this.length; i++)
        code(this[i], i);

    return this;
}

/** Return a new Array<T> based upon the old collection and a selection criteria
     You provide a predicate that takes a T and returns true to include it in the collection*/
Array.prototype.where = function (selector: (item: any) => boolean) {
    var collection = [];
    this.each((item: any) => {
        if (selector(item))
            collection.push(item);
    });

    return collection;
}

/** Remove an item in the collection*/
Array.prototype.remove = function (item: any) {
    return this.where((other: any) => other != item);
}

/** Remove an item in collection at a given index*/
Array.prototype.removeAt = function (index: number) {
    this.splice(index, 1)
    return this;
}

/** Take a number of rows, skipping a number of records if you wish.*/
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

/** Return only the distinct items from the array decided by the supplied predicate */
Array.prototype.distinct = function<NewT>(selector: (item: NewT) => NewT) {
    const result = [];
    const map = new Map();
    for (const item of this) {
      const selection = selector(item)
      if(!map.has(selection)){
          map.set(selection, true);
          result.push(selection);
      }
    }
    return result;
}

/** Order an array using a property selector */
Array.prototype.orderBy = function (selector: (item: any) => any) {
    return this.sort((a, b) => {
        var aComparable = selector(a);
        var bComparable = selector(b);

        if (aComparable > bComparable) return 1;
        if (aComparable < bComparable) return -1;

        return 0;
    });
}

/** Order an array using a property selector in descending order*/
Array.prototype.orderByDescending = function (selector: (item: any) => any) {
    return this.orderBy(selector).reverse();
}

Array.prototype.sum = function (selector: (item: any) => number): number {
    let count = 0;
    for(const item of this) {
        count += +selector(item)
    }
    return count;
}

/** Project each item in the array to a new form */
Array.prototype.select = function<NewT>(selector: (item: any) => any): Array<NewT> {
    var arr = []
    for (const item of this) {
        arr.push(selector(item))
    }
    return arr
}

Array.prototype.groupBy = function<TGroup, T>(selector: (item: any) => any): Grouping<TGroup, T>[] {
    var array: Grouping<TGroup, T>[] = []
    const distinct = this.distinct(selector)
    for (const dis of distinct) {
        const data = this.where(x => selector(x) === dis)
        array.push({
            group: dis,
            data: data
        })
    }
    return array;
}
