interface Array<T> {
    ConcatenateStringsWithSeparator(separator: string): string;
}

Array.prototype.ConcatenateStringsWithSeparator = function (separator: string = ', ') {
    // Idiot check
    if (this == null || this.length == 0) return '';

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