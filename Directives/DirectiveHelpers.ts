module MattSpeakman {
    /** Encapsulates the name that a directive should be delared with, as well as the code implementation
    */
    export interface IMattSpeakmanDirective {
        directiveName: () => string;
        directiveCode: ng.IDirectiveFactory;
    }

    /** If we define a class with multiple directives in it we should make them implement this interface
    */
    export interface IDirectiveCollection {
        directiveDefinitions: IMattSpeakmanDirective[];
    }

    /**
     * A Directive helpers class for registering a single directive or multiple directives at the same time
     */
    export class DirectiveHelpers {
        /**
         * Register a single directive
         * @param module The module for the directive to be added to
         * @param directive
         */
        public static RegisterDirective(module: ng.IModule, directive: IMattSpeakmanDirective) {
            module.directive(directive.directiveName(), directive.directiveCode);
        }
    }
}