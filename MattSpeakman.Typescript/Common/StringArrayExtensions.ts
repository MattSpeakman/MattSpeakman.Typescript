﻿interface Array<T> {
    ConcatenateStringsWithSeparator(separator: string): string;
}

Array.prototype.ConcatenateStringsWithSeparator = function (separator: string = ', ') {
    // Idiot check
    if (this == null || this.length == 0) return '';
    // If any of the items aren't a string then return with an error message
    this.each((item: any) => {
        if (item instanceof String == false)
            return 'Cannot concatenate an Array of non strings'
    });

    var text: string;

    for (var i: number = 0; i < this.length; i++) {
        if (this[i].IsNullOrWhitepsace() == false)
            text += this[i].trim();

        // Add the separator to every item except the first or the last
        if (i > 0 && i < this.length)
            text += separator;
    }

    return text;
}