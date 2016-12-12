module MattSpeakman {
    // A controller for the homepage
    export class HomeController extends ControllerBase {
        constructor(public $scope: HomeControllerScope, shared: SharedScopeService) {
            super($scope, shared);
        }
    }

    // This interface defines the necessary data that will be held for this controller only
    export interface HomeControllerScope extends IControllerBaseScope {

    }
}