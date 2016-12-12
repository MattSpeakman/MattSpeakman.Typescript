var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MattSpeakman;
(function (MattSpeakman) {
    // A controller for the homepage
    var HomeController = (function (_super) {
        __extends(HomeController, _super);
        function HomeController($scope, shared) {
            _super.call(this, $scope, shared);
            this.$scope = $scope;
        }
        return HomeController;
    }(MattSpeakman.ControllerBase));
    MattSpeakman.HomeController = HomeController;
})(MattSpeakman || (MattSpeakman = {}));
