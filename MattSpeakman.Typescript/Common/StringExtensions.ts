interface String {
    IsNullOrWhitespace(): boolean;
}


String.prototype.IsNullOrWhitespace = function () {
    if (this == undefined || this == null || this == '')
        return true;
    var pos: number = this.search(/^[\s]+$/);
    return pos == 0;
}