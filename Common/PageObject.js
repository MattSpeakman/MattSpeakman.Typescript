var MattSpeakman;
(function (MattSpeakman) {
    // This class represents a generic page object. To extend simply add your own implementation
    var PageObject = (function () {
        function PageObject(selector) {
            this.selector = selector;
        }
        Object.defineProperty(PageObject.prototype, "Obj", {
            // Lazy load it so that it is only called once needed
            get: function () {
                if (this._obj == null)
                    this._obj == this.selector();
                return this._obj;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageObject.prototype, "Value", {
            // Get the value property of a page object
            get: function () {
                return this.Obj.val();
            },
            // Set the value property of a page object
            set: function (value) {
                this.Obj.val(value);
            },
            enumerable: true,
            configurable: true
        });
        // In this implementation I have added an AddClass function.
        // This is going to be used to add an 'active' class to the relevant menu item after the page has loaded
        PageObject.prototype.AddClass = function (className) {
            this._obj.addClass(className);
        };
        return PageObject;
    }());
    MattSpeakman.PageObject = PageObject;
    // The page objects necessary for this website.
    var PageObjects = (function () {
        function PageObjects() {
        }
        return PageObjects;
    }());
    PageObjects.HomeLinkObj = new PageObject(function () { return $('#HomeLink'); });
    PageObjects.FaqLinkObj = new PageObject(function () { return $('#FAQLink'); });
    PageObjects.VideosLinkObj = new PageObject(function () { return $('#VideosLink'); });
    PageObjects.SetListLinkObj = new PageObject(function () { return $('#SetListLink'); });
    PageObjects.ContactLinkObj = new PageObject(function () { return $('#ContactLink'); });
    MattSpeakman.PageObjects = PageObjects;
})(MattSpeakman || (MattSpeakman = {}));
//# sourceMappingURL=PageObject.js.map