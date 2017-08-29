var MattSpeakman;
(function (MattSpeakman) {
    var StringExtensions = (function () {
        function StringExtensions() {
        }
        return StringExtensions;
    }());
    StringExtensions.IsNullOrWhitespace = function (value) {
        if (value == undefined || value == null || value == '')
            return true;
        var pos = value.search(/^[\s]+$/);
        return pos == 0;
    };
    MattSpeakman.StringExtensions = StringExtensions;
})(MattSpeakman || (MattSpeakman = {}));
//# sourceMappingURL=StringExtensions.js.map