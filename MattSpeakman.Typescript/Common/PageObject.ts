module MattSpeakman {
    // This class represents a generic page object. To extend simply add your own implementation
    export class PageObject {
        constructor(selector: () => JQuery) {
            this.selector = selector;
        }

        // Store the JQuery object as a private variable
        private _obj: JQuery;
        // Store the selector as a private variable
        private selector: () => JQuery;
        // Lazy load it so that it is only called once needed
        private get Obj(): JQuery {
            if (this._obj == null)
                this._obj == this.selector();

            return this._obj;
        }

        // Get the value property of a page object
        public get Value(): string {
            return this.Obj.val();
        }

        // Set the value property of a page object
        public set Value(value: string) {
            this.Obj.val(value)
        }

        // In this implementation I have added an AddClass function.
        // This is going to be used to add an 'active' class to the relevant menu item after the page has loaded
        public AddClass(className: string): void {
            this._obj.addClass(className);
        }
    }

    // The page objects necessary for this website.
    export class PageObjects {
        public static HomeLinkObj = new PageObject(() => $('#HomeLink'));
        public static FaqLinkObj = new PageObject(() => $('#FAQLink'));
        public static VideosLinkObj = new PageObject(() => $('#VideosLink'));
        public static SetListLinkObj = new PageObject(() => $('#SetListLink'));
        public static ContactLinkObj = new PageObject(() => $('#ContactLink'));
    }
}