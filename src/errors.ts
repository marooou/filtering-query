import { ANTLRErrorListener, Recognizer } from "antlr4ts-browser";

export class ErrorListener implements ANTLRErrorListener<any> {

    private readonly errors: Array<Error> = []

    syntaxError(recognizer: Recognizer<any, any>, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: any) {
        this.errors.push(new Error(`${msg} (at position ${charPositionInLine})`))
    }

    requireNoErrors() {
        const latestError = this.getLatestError()
        if (latestError) {
            throw latestError
        }
    }

    getLatestError(): Error | undefined {
        return this.errors.length > 0 ? this.errors[this.errors.length - 1] : undefined
    }
}
