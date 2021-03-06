﻿module MattSpeakman {
    /**
     * This is an example of a date picker factory that could be implemented
     */
    export class DatePickerFactory implements IMattSpeakmanDirective {
        private static _directiveName: string = "datePicker";
        public directiveName() { return DatePickerFactory._directiveName; }

        private datePickerOptions: DatepickerOptions = {
            dateFormat: 'dd/mm/yy',
            minDate: '0d',
            maxDate: '+30d'
        }

        public directiveCode = () => new DatePickerDirective(this.directiveName(), this.datePickerOptions);
    }


    /**
     * This directive adds a JQueryUI datepicker to an element
     */
    class DatePickerDirective implements ng.IDirective {
        constructor(private directiveName: string, private datePickerOptions: DatepickerOptions) {
        }

        // restrict this to attribute only

        public link: ng.IDirectiveLinkFn = (_scope, element: ng.IAugmentedJQuery, attrs: any) => {

            var handler = (event, ui) => {
                setScopeValue(ui.item.value);
            }

            // Update the scope with the required value
            var setScopeValue = (value) => {
                // Need to wrap this in a try catch so that upon setup no errors are thrown
                try {
                    var eleScope = element.scope();

                    // Establish the property name we need to be binding to
                    // Here we are allowing you to set either a ng-model="SomeProperty" or date-picker="SomeProperty"

                    var modelPropertyName: string = "";
                    var ngModelName = <any>attrs["ngModel"];
                    var directiveName = <any>attrs[this.directiveName];
                    if (MattSpeakman.StringExtensions.IsNullOrWhitespace(ngModelName)) modelPropertyName = directiveName;
                    else modelPropertyName = ngModelName;

                    // Build the angular expression to be evaluated
                    // This will get the name of the property in the scope so that we are applying in order to evaluate and set the appropriate value
                    var exp: string = modelPropertyName + "='" + value + "'";

                    // Code to execute in scope.apply.
                    // If we are not currently in a digest loop then apply the value to the scope
                    if (!eleScope.$$phase) {
                        eleScope.$apply(SC => SC.$eval(exp));
                    }
                    // Otherwise just evaluate the the expression and do nothing
                    else {
                        // Use current scope
                        eleScope.$eval(exp);
                    }
                }
                catch (Exception) { }

                // Set the element as a date picker
                element.datepicker(this.datePickerOptions);

                // Set the scope to the initial value
                setScopeValue(element.val());
            }
        }
    }
}