String.prototype.IsNullOrWhitespace = function () {
    if (this == undefined || this == null || this == '')
        return true;
    var pos = this.search(/^[\s]+$/);
    return pos == 0;
};
