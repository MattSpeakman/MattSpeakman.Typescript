module MattSpeakman {
    // This is a base class for all the controllers.
    // It is necessary for setting the sharedScopeService to $ so that from within the View itself
    // it is easy to call any of the properties using $.PROPERTY
    export abstract class ControllerBase {
        constructor(public $scope: IControllerBaseScope, protected shared: SharedScopeService) {
            this.$scope.$ = this.shared;
        }
    }
}