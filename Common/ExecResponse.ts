module MattSpeakman {
    // This class defines a response from a back end service.
    // The service that uses an ExecResponse will guarantee a response even if that response is a failure
    export class ExecResponse<T> {
        public ErrorCode: number;
        public Message: string;
        public Success: boolean;
        public Value: T;
    }
}