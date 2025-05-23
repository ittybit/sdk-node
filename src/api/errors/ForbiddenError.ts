/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Ittybit from "../index";
import * as core from "../../core";

export class ForbiddenError extends errors.IttybitError {
    constructor(body: Ittybit.ErrorResponse, rawResponse?: core.RawResponse) {
        super({
            message: "ForbiddenError",
            statusCode: 403,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
