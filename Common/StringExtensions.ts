interface String {
    IsNullOrWhitespace(): boolean;
}

module MattSpeakman {
    export class StringExtensions {

        public static IsNullOrWhitespace = function (value: string) {
            if (value == undefined || value == null || value == '')
                return true;
            var pos: number = value.search(/^[\s]+$/);
            return pos == 0;
        }
    }
}