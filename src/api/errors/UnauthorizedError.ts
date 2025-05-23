/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Ittybit from "../index";
import * as core from "../../core";

export class UnauthorizedError extends errors.IttybitError {
    constructor(body: Ittybit.ErrorResponse, rawResponse?: core.RawResponse) {
        super({
            message: "UnauthorizedError",
            statusCode: 401,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
