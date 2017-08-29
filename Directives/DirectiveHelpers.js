var MattSpeakman;
(function (MattSpeakman) {
    /**
     * A Directive helpers class for registering a single directive or multiple directives at the same time
     */
    var DirectiveHelpers = (function () {
        function DirectiveHelpers() {
        }
        /**
         * Register a single directive
         * @param module The module for the directive to be added to
         * @param directive
         */
        DirectiveHelpers.RegisterDirective = function (module, directive) {
            module.directive(directive.directiveName(), directive.directiveCode);
        };
        return DirectiveHelpers;
    }());
    MattSpeakman.DirectiveHelpers = DirectiveHelpers;
})(MattSpeakman || (MattSpeakman = {}));
//# sourceMappingURL=DirectiveHelpers.js.map