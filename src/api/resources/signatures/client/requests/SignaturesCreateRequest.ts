/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         filename: "video.mp4",
 *         folder: "example",
 *         expiry: 1735689600,
 *         method: "put"
 *     }
 */
export interface SignaturesCreateRequest {
    filename: string;
    folder?: string;
    expiry?: number;
    method?: SignaturesCreateRequest.Method;
}

export namespace SignaturesCreateRequest {
    export type Method = "get" | "put";
    export const Method = {
        Get: "get",
        Put: "put",
    } as const;
}
