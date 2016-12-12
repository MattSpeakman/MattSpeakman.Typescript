module MattSpeakman.Typescript {
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
    }

    // Store a class of PageObjects to be used
    export class PageObjects {
        public static HomeLinkObj = new PageObject(() => $('#HomeLink'));
    }
}
