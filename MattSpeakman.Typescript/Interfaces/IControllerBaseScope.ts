module MattSpeakman {
    // Define a base scope that will be native to each controller.
    // This scope is responsible for holding any information necessary from within a single controller.
    export interface IControllerBaseScope extends ng.IScope {
        $: SharedScopeService // Add shared scope to scope which makes it more accessible. This is done in the controller base scope
    }
}