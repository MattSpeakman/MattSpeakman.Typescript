var MattSpeakman;
(function (MattSpeakman) {
    // This is a base class for all the controllers.
    // It is necessary for setting the sharedScopeService to $ so that from within the View itself
    // it is easy to call any of the properties using $.PROPERTY
    var ControllerBase = (function () {
        function ControllerBase($scope, shared) {
            this.$scope = $scope;
            this.shared = shared;
            this.$scope.$ = this.shared;
        }
        return ControllerBase;
    }());
    MattSpeakman.ControllerBase = ControllerBase;
})(MattSpeakman || (MattSpeakman = {}));
//# sourceMappingURL=ControllerBase.js.map