var MattSpeakman;
(function (MattSpeakman) {
    /**
     * This is an example of a date picker factory that could be implemented
     */
    var DatePickerFactory = (function () {
        function DatePickerFactory() {
            var _this = this;
            this.datePickerOptions = {
                dateFormat: 'dd/mm/yy',
                minDate: '0d',
                maxDate: '+30d'
            };
            this.directiveCode = function () { return new DatePickerDirective(_this.directiveName(), _this.datePickerOptions); };
        }
        DatePickerFactory.prototype.directiveName = function () { return DatePickerFactory._directiveName; };
        return DatePickerFactory;
    }());
    DatePickerFactory._directiveName = "datePicker";
    MattSpeakman.DatePickerFactory = DatePickerFactory;
    /**
     * This directive adds a JQueryUI datepicker to an element
     */
    var DatePickerDirective = (function () {
        function DatePickerDirective(directiveName, datePickerOptions) {
            var _this = this;
            this.directiveName = directiveName;
            this.datePickerOptions = datePickerOptions;
            // restrict this to attribute only
            this.link = function (_scope, element, attrs) {
                var handler = function (event, ui) {
                    setScopeValue(ui.item.value);
                };
                // Update the scope with the required value
                var setScopeValue = function (value) {
                    // Need to wrap this in a try catch so that upon setup no errors are thrown
                    try {
                        var eleScope = element.scope();
                        // Establish the property name we need to be binding to
                        // Here we are allowing you to set either a ng-model="SomeProperty" or date-picker="SomeProperty"
                        var modelPropertyName = "";
                        var ngModelName = attrs["ngModel"];
                        var directiveName = attrs[_this.directiveName];
                        if (MattSpeakman.StringExtensions.IsNullOrWhitespace(ngModelName))
                            modelPropertyName = directiveName;
                        else
                            modelPropertyName = ngModelName;
                        // Build the angular expression to be evaluated
                        // This will get the name of the property in the scope so that we are applying in order to evaluate and set the appropriate value
                        var exp = modelPropertyName + "='" + value + "'";
                        // Code to execute in scope.apply.
                        // If we are not currently in a digest loop then apply the value to the scope
                        if (!eleScope.$$phase) {
                            eleScope.$apply(function (SC) { return SC.$eval(exp); });
                        }
                        else {
                            // Use current scope
                            eleScope.$eval(exp);
                        }
                    }
                    catch (Exception) { }
                    // Set the element as a date picker
                    element.datepicker(_this.datePickerOptions);
                    // Set the scope to the initial value
                    setScopeValue(element.val());
                };
            };
        }
        return DatePickerDirective;
    }());
})(MattSpeakman || (MattSpeakman = {}));
//# sourceMappingURL=DatePickerDirective.js.map