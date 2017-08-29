var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MattSpeakman;
(function (MattSpeakman) {
    // A controller for the homepage
    var HomeController = (function (_super) {
        __extends(HomeController, _super);
        function HomeController($scope, shared) {
            var _this = _super.call(this, $scope, shared) || this;
            _this.$scope = $scope;
            return _this;
        }
        return HomeController;
    }(MattSpeakman.ControllerBase));
    MattSpeakman.HomeController = HomeController;
})(MattSpeakman || (MattSpeakman = {}));
//# sourceMappingURL=HomeController.js.map